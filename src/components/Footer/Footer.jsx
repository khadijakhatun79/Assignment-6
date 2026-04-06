import React from 'react';
import footer from "../../assets/logo2.svg"

const Footer = () => {
  return (
     
     <div className='bg-[#101727] pb-8'>
                <div className='max-w-7xl mx-auto'>
                    <footer className="footer sm:footer-horizontal text-white pt-32 pb-20">
                        <aside>
                        <a href='#'><img src={footer} alt='logo' /></a>
                           
                            <p>
                                ACME Industries Ltd.
                                Providing reliable tech since 1992
                            </p>
                        </aside>
                        <nav>
                            <h6 className="footer-title">Services</h6>
                            <a className="link link-hover">Branding</a>
                            <a className="link link-hover">Design</a>
                            <a className="link link-hover">Marketing</a>
                            <a className="link link-hover">Advertisement</a>
                        </nav>
                        <nav>
                            <h6 className="footer-title">Company</h6>
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Jobs</a>
                            <a className="link link-hover">Press kit</a>
                        </nav>
                        <nav>
                            <h6 className="footer-title">Legal</h6>
                            <a className="link link-hover">Terms of use</a>
                            <a className="link link-hover">Privacy policy</a>
                            <a className="link link-hover">Cookie policy</a>
                        </nav>
                        <nav>
                            <h6 className="footer-title">Social Links</h6>
                           
                        </nav>
                    </footer>
                </div>
                <aside className='text-white text-center flex max-w-7xl mx-auto justify-between'>
                    <p className='leading-6'> © Digitools. All rights reserved.</p>
                    <ul className='flex gap-10'>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms of Service</a></li>
                        <li><a href="">Cookies</a></li>
                    </ul>
                </aside>
            </div>
  );
};

export default Footer;