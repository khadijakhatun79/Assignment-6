import React from 'react';
import { Features } from 'tailwindcss';

const DaisyPricing = ({ pricing }) => {

  const { name, price, features, popular, description} = pricing;

  return (
    <div className="card w-96 bg-base-100 shadow-sm">
      <div className="card-body pt-6 flex h-120 w-95">
       {
        popular && <span className="badge font-bold text-sm p-4 rounded-full  badge-accent badge-xs badge-warning badge absolute left-1/2 -translate-x-1/2 -top-5 badge-xl rounded-full  badge-accent">Most Popula</span> 
       }

        <div className="mt-6">
          <h2 className="text-3xl font-bold text0[#101727]">{name}</h2>
          <p className='leading-5 text-[#627382]'>{description}</p>
          <h4 className="text-xl">{price}</h4>
        </div>

         <ul className="mt-6 flex flex-col gap-2 text-xs mb-6">
          {
            features.map((feature, index) => 
            <li key={index}>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{feature}</span>
      </li>)
          }
    </ul>
    <div className="mt-6">
      <button className="th-btn btn-block">Subscribe</button>
    </div>
      </div>
    </div>
  );
};

export default DaisyPricing;