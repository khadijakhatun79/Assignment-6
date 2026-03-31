import React, { use } from 'react';
import ProductCard from './ProductCard/ProductCard';

const Product = ({ProductPromise}) => {
    console.log(ProductPromise);
    const Product = use(ProductPromise);
    
    return (
        <div className='w-[1200px] mx-auto pt-[120px] pb-[120px]'> 
        <div className="title-area">
                <h2 className="sec-title">Premium Digital Tools</h2>
                
                <p className="sec-text">Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                </div>
                 

            {
                <ProductCard product={Product}></ProductCard>
            }
       
        
         
        </div>
    );
};

export default Product;