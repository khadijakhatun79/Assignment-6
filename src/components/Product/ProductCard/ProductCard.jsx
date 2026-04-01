import React from 'react';
import Card from '../../ui/Card';

const ProductCard = ({ product }) => {
  if (!Array.isArray(product)) {
    product = [product]; // convert single object to array
  }

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {product.map((item) => (
        <Card key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ProductCard;