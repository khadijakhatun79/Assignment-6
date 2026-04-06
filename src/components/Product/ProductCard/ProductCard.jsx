import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Check } from "lucide-react";

const ProductCard = ({ product, addToCart }) => {
  const [added, setAdded] = useState(false);

 const handleAddToCart = () => {
  addToCart(product);
  setAdded(true);
  toast.success(`${product.productName} added to cart!`);
};

  return (
    <div className={`card relative border-[#F2F2F2] p-4 rounded-md shadow ${added ? '' : ''}`}>
      <div className='icon'><img src={product.icon} alt={product.name} className=""/></div>
      <h3 className="text-2xl font-bold text-black mb-4">{product.productName}</h3>
      <p className="text-[#627382] text-sm mb-2">{product.description}</p>
      <p className="text-black font-bold text-2xl">${product.price} / {product.period}</p>
      <span className={`badge badge-warning font-bold absolute top-3 right-3 ${product.tagType}`}>{product.tag}</span>

      <ul className="mt-2 mb-4 list-disc list-inside">
        {product.features?.map((feature, index) => (
          <li className='flex gap-4  text-zinc-500' key={index}><Check className="text-green-500 w-5 h-5" />{feature}</li>
        ))}
      </ul>

          <button 
        onClick={handleAddToCart} 
        className={`btn w-full ${added ? 'bg-green-500 text-white' : 'btn bg-linear-to-r from-[#4F39F6] to-[#9514FA]  rounded-full w-full text-white'}`}
      >
        {added ? "Added to Cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductCard;