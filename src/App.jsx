import React, { Suspense, useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Banner from './components/Banner/Banner';
import Product from './components/Product/Product';
import SelectedCart from './components/SelectedCart/SelectedCart';
import PricingOptions from './components/PricingOptions/PricingOptions';
import Footer from './components/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cta from './components/Cta/Cta';
import Process from './components/Process/Process';

const fetchProduct = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const pricingPromise = fetch('pricingData.json').then(res => res.json());

function App() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("products");

  const ProductPromise = fetchProduct();

  // ✅ ADD
  const addToCart = (product) => {
    if (!cart.find(item => item.id === product.id)) {
      setCart(prev => [...prev, product]);
      toast.success(`${product.name} added to cart!`);
    } else {
      toast.info(`${product.name} already added!`);
    }
  };

  // ✅ REMOVE
  const removeItem = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
    toast.info("Product removed!");
  };

  // ✅ CHECKOUT
  const checkout = () => {
    setCart([]);
    toast.success("Checkout successful!");
  };

  return (
    <>
      <Navbar cartCount={cart.length} toggleView={setView} />
      <ToastContainer />

      <Banner />

      {view === "products" && (
        <Suspense fallback={<span className="loading loading-dots"></span>}>
          <Product 
            ProductPromise={ProductPromise} 
            addToCart={addToCart} 
            cart={cart}
            removeItem={removeItem}
            checkout={checkout}
          />
        </Suspense>
      )}

      {view === "cart" && (
        <SelectedCart 
          cart={cart} 
          removeItem={removeItem} 
          checkout={checkout}
        />
      )}
<Process></Process>


      <Suspense fallback={<span className="loading loading-ring"></span>}>
        <PricingOptions pricingPromise={pricingPromise} />
      </Suspense>
      <Cta></Cta>
      

      <Footer />
    </>
  );
}

export default App;