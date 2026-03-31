import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Navbar from './components/navbar/Navbar'
import PricingOptions from './components/PricingOptions/PricingOptions'
import Product from './components/Product/Product'

const fetchProduct = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const pricingPromise = fetch('pricingData.json').then(res => res.json())

function App() {
   const ProductPromise = fetchProduct();  

  return (
    <>
     <Navbar></Navbar>
     <Banner></Banner>
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <Product ProductPromise={ProductPromise}></Product>
      </Suspense>
    

     <Suspense fallback={<span className="loading loading-ring loading-lg"></span>}>
     <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
     </Suspense> 

     <Footer></Footer>
    </>
  )
}

export default App
