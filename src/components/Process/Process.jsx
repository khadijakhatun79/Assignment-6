import React from 'react';
import user from '../../assets/user.png';
import packageIcon from '../../assets/package.png';
import rocket from '../../assets/rocket.png';





const Process = () => {
    return (
         <div className='pt-[120px] pb-[120px] flex-col gap-10 flex items-center max-sm:mt-12 justify-center bg-[#F9FAFC]'>
                    <div className='max-w-7xl mx-auto text-center'>
                        <h1 className='text-[#101727] font-extrabold text-5xl max-sm:text-3xl max-sm:text-center mb-4'>Get Started in 3 Steps</h1>
                        <p className='text-[#627382] leading-5 max-sm:w-[80%]'>Start using premium digital tools in minutes, not hours.</p>
                    </div>
                    <div className='grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-8 max-md:gap-6 mt-6 mx-auto'>
                        <div className='w-95 h-95 border bg-base-100 border-gray-100 rounded-xl flex items-center justify-center flex-col p-6 max-sm:w-full'>
                            <div className="text-center flex flex-col justify-center items-center relative p-10">
                                <span className="badge w-10 h-10 text-white rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] absolute top-0 right-0">01</span>
                                <div className='flex items-center justify-center flex-col'>
                                    <div className='bg-[#9614fa0c] mb-4 rounded-full w-20 h-20 flex items-center justify-center'>
                                        <img src={user} alt="user" />
                                    </div>
                                    <h1 className='font-bold text-2xl text-[#101727] mb-4'>Create Account</h1>
                                    <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-95 h-95 border bg-base-100 border-gray-100 rounded-xl flex items-center justify-center flex-col p-6 max-sm:w-full'>
                            <div className="text-center flex flex-col justify-center items-center relative p-12">
                                <span className="badge text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-10 h-10 rounded-full absolute top-0 right-0">02</span>
                                <div className='flex items-center justify-center flex-col'>
                                    <div className='bg-[#9614fa0c] mb-4 rounded-full w-20 h-20 flex items-center justify-center'>
                                        <img src={packageIcon} alt="package" />
                                    </div>
                                    <h1 className='font-bold text-2xl text-[#101727] mb-4'>Choose Products</h1>
                                    <p className='text-[#627382]'>Browse our catalog and select the tools that fit your needs..</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-95 h-95 border bg-base-100 border-gray-100 rounded-xl flex items-center justify-center flex-col p-6 max-sm:w-full'>
                            <div className="text-center flex flex-col justify-center items-center relative p-12">
                                <span className="badge w-10 h-10 rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] absolute top-0 right-0">03</span>
                                <div className='flex items-center justify-center flex-col'>
                                    <div className='bg-[#9614fa0c] mb-4 rounded-full w-20 h-20 flex items-center justify-center'>
                                        <img src={rocket} alt="rocketImg" />
                                    </div>
                                    <h1 className='font-bold text-2xl text-[#101727] mb-4'>Start Creating</h1>
                                    <p className='text-[#627382]'>Download and start using your premium tools immediately.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
};

export default Process;