import React, { useState } from "react";

const ProductCard = ({ product, addToCart }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setIsSelected(true);
  };

  return (
    <div className="card w-96 bg-base-100 shadow-sm">
      <span className="badge badge-warning">{product.tag}</span>
      <img src={product.icon} alt={product.name} className="mb-3" />
      <h2 className='text-3xl font-bold mb-2'>{product.name}</h2>
      <p className='mb-2'>{product.description}</p>
      <span className="text-xl">${product.price}</span>
      <ul className="mt-6 flex flex-col gap-2 text-xs">
        {product.features?.map((f, i) => <li key={i}>• {f}</li>)}
      </ul>
      <button 
        className='th-btn w-full mt-4' 
        disabled={isSelected} 
        onClick={handleAdd}
      >
        {isSelected ? "Added to cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductCard;