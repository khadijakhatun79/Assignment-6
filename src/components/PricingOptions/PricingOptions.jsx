import React, { use } from 'react';
import DaisyPricing from '../DaisyPricing/DaisyPricing';

const PricingOptions = ({pricingPromise}) => {
    const pricingData = use(pricingPromise);
   
    return (
        <div className='w-[1200px] mx-auto pt-[120px] pb-[120px]'>
            <div className="title-area">
                <h2 className="sec-title">Simple, Transparent Pricing</h2>
                
                <p className="sec-text">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>
       
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>

            {
                pricingData.map(pricing => <DaisyPricing key={pricing.id} pricing={pricing}></DaisyPricing>)
            }
        </div>
        </div>
    );
};

export default PricingOptions;