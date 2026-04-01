import React, { useState } from 'react';
import Features from './Features';

const Card = ({ product }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="card w-96 bg-base-100 shadow-sm">
      <div className="card-body">

        <span className="badge badge-warning">{product.tag}</span>

        <div>
          <div className='icon mb-3'>
            <img src={product.icon} alt={product.productName} />
          </div>

          <h2 className='text-3xl font-bold text-[24px] mb-2'>
            {product.productName}
          </h2>

          <p className='mb-2'>{product.description}</p>

          <span className="text-xl">${product.price}</span> 
        </div>

        <ul className="mt-6 flex flex-col gap-2 text-xs">
          {
            product.features?.map((feature, index) => (
              <Features key={index} feature={feature} />
            ))
          }
        </ul>

        <div className="mt-6">
          <button 
            onClick={() => setIsSelected(!isSelected)} disabled={(isSelected ? true : false)}
            className='th-btn w-full'
          >
            {isSelected ? "Added to cart " : "Buy Now"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default Card;