import React, { useState } from 'react';
import Link from './Link';
import { Menu, X, ShoppingBag } from 'lucide-react';
import logo from "../../assets/logo.svg"

const navigationData = [
  { id: 1, name: "Products", path: "products" },
  { id: 2, name: "Features", path: "/features" },
  { id: 3, name: "Pricing", path: "/pricing" },
  { id: 4, name: "Testimonials", path: "/testimonials" },
  { id: 5, name: "FAQ", path: "/faq" }
];

const Navbar = ({ cartCount, toggleView }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='border-b-[1px] border-b-[#F2F2F2] py-4'>
      <div className="navbar w-[1200px] mx-auto">
        <div className="navbar-start">
          <span className='flex' onClick={() => setOpen(!open)}>
            {open ? <X className='md:hidden' /> : <Menu className='md:hidden' />}
            <ul className={`md:hidden absolute duration-1000 text-black ${open ? 'top-8' : '-top-40'} bg-amber-200`}>
              {navigationData.map(route => <Link key={route.id} route={route} />)}
            </ul>
          </span>
          <a href='#'><img src={logo} alt='logo' /></a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className='md:flex hidden'>
            {navigationData.map(route => <Link key={route.id} route={route} />)}
          </ul>
        </div>

        <div className="navbar-end gap-2">
          <button className="" onClick={() => toggleView("cart")}>
            <ShoppingBag className='text-sm' /> <span className='cart'>{cartCount}</span> 
          </button>
          <a href='#' className="btn">Login</a>
          <a href='#' className="th-btn">Get Started</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;