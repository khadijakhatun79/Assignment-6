import { ShoppingCart } from "lucide-react";
import React from "react";

const SelectedCart = ({ cart, removeItem, checkout }) => {
const total = cart.reduce((sum, item) => {
  return sum + parseFloat(item.price);
}, 0);

  return (
    <div className="w-[800px] mx-auto">

      {cart.length === 0 ? (
        <div className="h-80 flex flex-col text-center justify-center items-center false">
        <div class="">
        <ShoppingCart className="h-40 w-40 text-gray-300 mb-4"></ShoppingCart>
        </div>
         <p class="text-3xl font-bold text-center">Your card is empty!!</p>
        </div>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center p-4 border mb-3 rounded">

              <div className="card items-center flex gap-3">
              
               <div className="icon"> <img src={item.icon} alt="" className="w-10" /></div>
                <div>
                <span className="block">{item.productName}</span>
                        <span>${item.price}</span> </div>
              </div>

      

              <button 
                onClick={() => removeItem(item.id)}
                className="btn btn-error"
              >
                Remove
              </button>
            </div>
          ))}

          <h2 className="text-[20px] font-bold mt-6">
            Total: ${total}
          </h2>

          <button 
            onClick={checkout}
            className="th-btn w-full mt-4"
          >
            Proceed to Checkout
          </button>
        </>
      )}

    </div>
  );
};

export default SelectedCart;