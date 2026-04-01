import { Suspense, useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Navbar from './components/navbar/Navbar';
import PricingOptions from './components/PricingOptions/PricingOptions';
import Product from './components/Product/Product';
import Cart from './components/Cart';

// Fetch products from data.json asynchronously
const fetchProduct = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

// Fetch pricing data asynchronously
const pricingPromise = fetch('pricingData.json').then(res => res.json());

function App() {
  // Local state for cart view
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("products");

  // Async product fetch promise
  const ProductPromise = fetchProduct();

  // Cart functions
  const addToCart = (product) => {
    setCart([...cart, product]);
    alert("Added to cart");
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    alert("Removed from cart");
  };

  const checkout = () => {
    setCart([]);
    alert("Checkout successful!");
  };

  return (
    <>
      <Navbar cartCount={cart.length} toggleView={setView} />
      <Banner />

      {/* Conditional rendering for product or cart view */}
      {view === "products" && (
        <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <Product ProductPromise={ProductPromise} addToCart={addToCart} />
        </Suspense>
      )}

      {view === "cart" && (
        <Cart cart={cart} removeItem={removeItem} checkout={checkout} />
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