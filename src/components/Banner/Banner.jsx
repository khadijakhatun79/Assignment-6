import React from 'react';
import heroimg from "../../assets/banner.png"

const Banner = () => {
    return (
        <div className='w-[1200px] mx-auto'>
            <section 
                className="hero-area flex gap-[60px] items-center grid grid-cols-1 lg:grid-cols-2 lg:flex justify-between my-20" id="hero"> 
                <div className="hero-style1">
                    <span className="sub-title">
                        <span className="dots"></span>Early Access Now Open
                    </span>

                    <h1 className="text-4xl lg:text-[72px] font-bold text-center lg:text-left">
                        Supercharge Your Digital Workflow
                    </h1>

                    <p className="py-6">
                        A private space to store notes, links, and learning summaries — designed to
                        help you think clearly, connect ideas, and turn learning into long-term knowledge.
                    </p>

                    <div className="flex gap-6 items-center">
                        <a href="#" className="th-btn">Get Started  </a>

                        <a href="#" className="btn outline rounded-full"> Watch Demo </a>
                    </div>
                </div>
                <div className='w-full max-w-[500px] mx-auto rounded-lg shadow-2xl'><img src={heroimg} alt='logo' /></div>
            </section>
        </div>
    );
};

export default Banner;