import React from 'react';

const Cta = () => {
    return (
         <div className=' bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-32'>
            <div className='text-center mb-10 text-white'>
                <h1 className='text-4xl font-extrabold mb-4'>Ready to Transform Your Workflow?</h1>
                <p className='leading-6'>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
            </div>
            <div className='text-center'>
                <div className='mb-4 flex gap-4 justify-center items-center'>
                    <button className='btn rounded-full'>Explore Products</button>
                    <button className='btn btn-outline text-white rounded-full'>View Pricing</button>
                </div>
                <p className='text-white'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default Cta;