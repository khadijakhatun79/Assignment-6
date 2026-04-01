import React from 'react';

const Cart = ({ cart, removeItem, checkout }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id}>
              <p>{item.icon} {item.name} - ${item.price}</p>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))}

          <h3>Total: ${total}</h3>

          <button onClick={checkout}>Proceed to Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;