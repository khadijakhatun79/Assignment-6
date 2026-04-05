import React from 'react';


const Cart = ({ cart, handleRemoveFromCart }) => {
    // console.log(cart);
    const totalPrice = cart.reduce((total, item) => total + item.price.amount, 0);
    // console.log("Cart Data inside Component:", cart)

    return (
        <div className='pt-24 max-lg:pb-20 bg-[#F9FAFC]'>
            <div className='mx-auto bg-[#F9FAFC] max-sm:w-full'>
                <div className='bg-base-100 max-sm:w-full p-10 w-304 max-lg:w-200 mx-auto rounded-2xl'>
                    <h1 className='text-2xl font-bold text-[#101727] mb-6'>Your cart: {cart.length}</h1>
                    <div className='cartData mb-12'>
                        <div className='space-y-4'>
                            {cart.map((item) => (
                                <div key={item.id} className="rounded-2xl p-4 bg-[#0000000a] h-24 flex flex-col justify-center">
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center gap-4'>
                                            <div>
                                                <img src={item.img} alt="itemImg" />
                                            </div>
                                            <div>
                                                <h2 className='mb-2 text-xl text-[#101727] font-semibold'>{item.title}</h2>
                                                <p className='leading-5 text-[#627382}'>${item.price.amount}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <button onClick={() => handleRemoveFromCart(item.id)} className="btn btn-soft btn-secondary rounded-full">Remove</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={`${cart.length == 0 && 'hidden'}`}>
                        <div className='flex justify-between items-center mb-4'>
                            <h1 className='text-[#627382] font-bold'>Total:</h1>
                            <p className='text-2xl text-[#101727] font-bold'>${totalPrice}</p>
                        </div>
                        <div className='w-full'>
                            <button className='w-full btn rounded-full btn-secondary h-12'>Proceed to Checkout</button>
                        </div>
                    </div>
                    <div className={`h-80 flex flex-col text-center justify-center items-center ${cart.length > 0 && 'hidden'}`}>
                        <BsCart3 className='h-40 w-40 text-gray-300 mb-4' />
                        <h1 className='text-2xl font-bold text-gray-300'>Your Cart Is Emty</h1>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Cart;