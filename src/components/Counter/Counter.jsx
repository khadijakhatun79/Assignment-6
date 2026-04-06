import React from 'react';

const Counter = () => {
    return (
        <div className='bg-[linear-gradient(89.15deg,#4F39F6_-30.76%,#9514FA_99.27%)] py-14 max-sm:py-0 max-lg:py-0'>
            <div className='max-w-6xl max-sm:w-full max-sm:flex-col max-lg:w-180 max-lg:gap-4 p-4 max-sm:gap-4 flex justify-between items-center mx-auto'>
                <div className='text-white'>
                    <h1 className='text-6xl font-extrabold mb-3 max-sm:mb-1 max-sm:text-4xl max-lg:text-4xl'>50K+</h1>
                    <p className='max-sm:text-lg text-2xl font-medium '>Active Users</p>
                </div>
                <div className="divider max-sm:divider-vertical divider-horizontal before:bg-white after:bg-white"></div>
                <div className='text-white'>
                    <h1 className='text-6xl font-extrabold mb-3 max-sm:mb-1 max-sm:text-4xl max-lg:text-4xl'>200+</h1>
                    <p className='max-sm:text-lg text-2xl font-medium'>Premium Tools</p>
                </div>
                <div className="divider max-sm:divider-vertical divider-horizontal before:bg-white after:bg-white"></div>
                <div className='text-white'>
                    <h1 className='text-6xl font-extrabold mb-3 max-sm:mb-1 max-sm:text-4xl max-lg:text-4xl'>4.9</h1>
                    <p className='max-sm:text-lg text-2xl font-medium'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Counter;

