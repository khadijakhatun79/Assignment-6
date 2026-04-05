import React from 'react';
import { toast } from 'react-toastify';

const SelectedCart = ({ cart, removeItem, checkout }) => {
  const handleRemove = (id) => {
    removeItem(id);
    toast.info("Product removed from cart!");
  };

  const handleCheckout = () => {
    checkout();
    toast.success("Checkout successful!");
  };

  return (
    <div className="w-[1200px] mx-auto py-16">
      {cart.length === 0 ? (
        <div className="h-[400px] flex flex-col justify-center items-center gap-4">
          <h2 className="font-semibold text-xl">No Product selected yet</h2>
          <p>Go to Products tab to select Product</p>
        </div>
      ) : (
        <div className="space-y-4">
          {cart.map((product) => (
            <div key={product.id} className="flex justify-between items-center p-4 border rounded">
              <div className="flex items-center gap-3">
                <img src={product.icon} alt={product.name} className="w-12 h-12"/>
                <span>{product.name}</span>
              </div>
              <span>${product.price}</span>
              <button onClick={() => handleRemove(product.id)} className="btn btn-error">Remove</button>
            </div>
          ))}
          <button onClick={handleCheckout} className="th-btn w-full mt-4">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default SelectedCart;