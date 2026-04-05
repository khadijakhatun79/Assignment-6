import React, { use, useState } from 'react';
import ProductCard from './ProductCard/ProductCard';

const Product = ({ ProductPromise, addToCart }) => {
  const productData = use(ProductPromise);

  const [selectedType, setSelectedType] = useState("available");

  const displayedProducts =
    selectedType === "available" ? productData : [];

  return (
    <div className='w-[1200px] mx-auto pt-[120px] pb-[120px]'>
      <div className="title-area">
        <h2 className="sec-title">Premium Digital Tools</h2>
        <p className="sec-text">
          Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
        </p>
      </div>

      <div className='button-area flex gap-4 w-[248px] mx-auto items-center my-6'>
        <button
          onClick={() => setSelectedType("available")}
          className={`btn ${selectedType === "available" ? "bg-[#E7FE29]" : ""}`}
        >
          Available
        </button>
        <button className='btn' disabled>
          Selected (0)
        </button>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {displayedProducts.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Product;