import React from 'react';
import heroimg from "../../assets/banner.png"

const Banner = () => {
    return (
        <div className='w-[1200px] mx-auto'>
            <section 
                className="hero-area flex gap-[60px] items-center" id="hero"> 
                <div className="hero-style1">
                    <span className="sub-title">
                        <span className="dots"></span>Early Access Now Open
                    </span>

                    <h1 className="hero-title text-[72px]">
                        Structured thinking, <span className="title">not just note-taking.</span>
                    </h1>

                    <p className="hero-text">
                        A private space to store notes, links, and learning summaries — designed to
                        help you think clearly, connect ideas, and turn learning into long-term knowledge.
                    </p>

                    <div className="hero-button">
                        <a href="#" className="th-btn">
                            Start Building Your Vault <i className="fa-solid fa-arrow-right"></i>
                        </a>

                        <a href="#" className="button border">
                            <i className="fa-solid fa-play"></i> See How It Works
                        </a>
                    </div>
                </div>
                <div className='hero-image'><img src={heroimg} alt='logo' /></div>
            </section>
        </div>
    );
};

export default Banner;