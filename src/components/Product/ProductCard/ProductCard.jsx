import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ProductCard = ({ product, addToCart }) => {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    toast.success(`${product.name} added to cart!`);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className={`border p-4 rounded shadow ${added ? '' : ''}`}>
      <img src={product.icon} alt={product.name} className="w-16 h-16 mb-2"/>
      <h3 className="font-semibold">{product.name}</h3>
      <p className="text-sm mb-2">{product.description}</p>
      <p className="font-bold">${product.price} / {product.period}</p>
      <span className={`tag ${product.tagType}`}>{product.tag}</span>

      <ul className="mt-2 mb-4 list-disc list-inside">
        {product.features.map((f, i) => <li key={i}>{f}</li>)}
      </ul>

      <button 
        onClick={handleAddToCart} 
        className={`btn w-full ${added ? 'bg-green-500 text-white' : 'bg-yellow-400'}`}
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;