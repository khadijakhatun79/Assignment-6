import React from 'react';
import Card from '../../ui/Card';



const ProductCard = ({product}) => {
    //  const {productName} = product; 
    console.log(product, "product");
    
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {product.map((product) => {
            return  <Card product={product}></Card>
           
        })}
       
</div>
    );
};

export default ProductCard;