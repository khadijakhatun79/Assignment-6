import React, { useState } from "react";

import { Check } from "lucide-react";

const ProductCard = ({ product, addToCart }) => {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    addToCart(product);
    setAdded(true);
  };

  return (
    <div className="card w-96 bg-base-100 shadow-sm">

      <div className="card-body">

        <span className="badge badge-warning">{product.tag}</span>

        <div className='icon'><img src={product.icon} alt={product.name} className=""/></div>

        <h2 className="text-xl font-bold">{product.name}</h2>
        <p>{product.description}</p>

        <span className="text-lg font-semibold">${product.price}</span>

         <ul className="mt-2 mb-4 list-disc list-inside">
        {product.features?.map((feature, index) => (
          <li className='flex gap-4  text-zinc-500' key={index}><Check className="text-green-500 rounded-full" />{feature}</li>
        ))}
      </ul>

        <button
          onClick={handleClick}
          disabled={added}
          className={`btn w-full ${added ? 'bg-green-500 text-white' : 'btn bg-linear-to-r from-[#4F39F6] to-[#9514FA]  rounded-full w-full text-white'}`}
        >
          {added ? "Added to cart" : "Buy Now"}
        </button>

      </div>
    </div>
  );
};

export default ProductCard;