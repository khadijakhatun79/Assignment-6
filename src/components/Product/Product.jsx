import React, { use, useState } from 'react';
import ProductCard from './ProductCard/ProductCard';
import SelectedCart from '../SelectedCart/SelectedCart';

const Product = ({ ProductPromise, addToCart, cart }) => {
  const productData = use(ProductPromise);
  const [selectedType, setSelectedType] = useState("available");

  const displayedProducts = selectedType === "available" ? productData : [];

  return (
    <div className='w-[1200px] mx-auto pt-[120px] pb-[120px]'>
      <div className="title-area">
        <h2 className="sec-title">Premium Digital Tools</h2>
        <p className="sec-text">
          Choose from our curated collection of premium digital products.
        </p>
      </div>

      <div className='button-area flex gap-4 w-[248px] mx-auto items-center my-6'>
        <button
          onClick={() => setSelectedType("available")}
          className={`btn ${selectedType === "available" ? "bg-[#E7FE29]" : ""}`}
        >
          Available
        </button>
        <button
          onClick={() => setSelectedType("selected")}
          className={`btn ${selectedType === "selected" ? "bg-[#E7FE29]" : ""}`}
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