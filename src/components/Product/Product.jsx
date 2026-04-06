import React, { use, useState } from 'react';
import ProductCard from './ProductCard/ProductCard';
import SelectedCart from '../SelectedCart/SelectedCart';

const Product = ({ ProductPromise, addToCart, cart }) => {
  const productData = use(ProductPromise);
  const [selectedType, setSelectedType] = useState("available");

  const displayedProducts = selectedType === "available" ? productData : [];

  return (
    <div className='w-[1200px] mx-auto pt-[120px] pb-[120px]'>
      <div className="w-[550px] mx-auto text-center">
        <h2 className="text-[48px] font-bold text-black">Premium Digital Tools</h2>
        <p className="text-[#627382] px-2">Choose from our curated collection of premium digital products designed to boost your productivity and creativity. </p>
      </div>

      <div className='button-area flex justify-center gap-6 w-[290px] mx-auto items-center my-6'>
        <button
          onClick={() => setSelectedType("available")}
          className={`${selectedType === "available" ? "tab rounded-full w-40 h-15 py-4 text-white font-bold bg-[linear-gradient(89.15deg,#4F39F6_-30.76%,#9514FA_99.27%)]" : ""}`}
        >
          Products
        </button>
        <button
          onClick={() => setSelectedType("selected")}
          className={` ${selectedType === "selected" ? "tab rounded-full w-40 h-15 py-4 text-white font-bold bg-[linear-gradient(89.15deg,#4F39F6_-30.76%,#9514FA_99.27%)]" : ""}`}
        >
          Cart ({cart.length})
        </button>
      </div>

      {selectedType === "available" ? (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {displayedProducts.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      ) : (
        <SelectedCart cart={cart} removeItem={(id) => addToCart({ type: 'remove', id })} checkout={() => addToCart({ type: 'checkout' })}/>
      )}
    </div>
  );
};

export default Product;