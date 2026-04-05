import React, { Suspense, useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Banner from './components/Banner/Banner';
import Product from './components/Product/Product';
import SelectedCart from "./components/SelectedCart/SelectedCart"; 
import PricingOptions from './components/PricingOptions/PricingOptions';
import Footer from './components/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';

// Fetch products 
const fetchProduct = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

// Fetch pricing data 
const pricingPromise = fetch('pricingData.json').then(res => res.json());

function App() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("products");

  // Async product fetch
  const ProductPromise = fetchProduct();

  // Cart functions
  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
    toast.success(`${product.name} added to cart!`);
  };

  const removeItem = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
    toast.info(`Product removed from cart`);
  };

  const checkout = () => {
    setCart([]);
    toast.success("Checkout successful!");
  };

  return (
    <>
      <Navbar cartCount={cart.length} toggleView={setView} />
      <ToastContainer position="top-right" autoClose={2000} />

      <Banner />

      {/* Toggle view: Products / Cart */}
      {view === "products" && (
        <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <Product ProductPromise={ProductPromise} addToCart={addToCart} />
        </Suspense>
      )}

      {view === "cart" && (
        <SelectedCart cart={cart} removeItem={removeItem} checkout={checkout} />

      
      )}

      {/* Pricing Section */}
      <Suspense fallback={<span className="loading loading-ring loading-lg"></span>}>
        <PricingOptions pricingPromise={pricingPromise} />
      </Suspense>

      <Footer />
    </>
  );
}

export default App;