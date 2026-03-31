import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({ pricing }) => {
  const {name, price, description, features} = pricing;

  return (
    <div className='border flex-col bg-amber-600 rounded-2xl p-8 m-2'>
      <div>
        <h1 className='text-7xl'>{name}</h1>
        <h4 className='text-3xl'>{price}</h4>
      </div>
      <div className=''>
        <p>{description}</p>
            <div className='bg-amber-400 p-4 mt-4 rounded-2xl flex-1'>
        {
            features.map((feature, index) =><PricingFeature key={index} feature={feature}></PricingFeature>)
           
        }
         </div>
         <button className='btn w-full bg-amber-500 p-3 mt-4'>Subscribe</button>
      </div>
    </div>
  );
};

export default PricingCard;