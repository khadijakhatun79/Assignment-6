import React, { useState } from 'react';
import Link from './Link';
import { Menu, ShoppingBag, X } from 'lucide-react';
import logo from "../../assets/logo.svg"

 const navigationData = [
  { id: 1, name: "Products", path: "products" },
  { id: 2, name: "Features", path: "/features" },
  { id: 3, name: "Pricing", path: "/pricing" },
  { id: 4, name: "Testimonials", path: "/testimonials" },
  { id: 5, name: "FAQ", path: "/faq" }
];

const Navbar = () => {
   const [open, setOpen] = useState(false);

   const links =  navigationData.map(route => <Link key={route.id}  route={route}></Link>)
  return (
    <div className='border-b-[1px] border-b-[#F2F2F2] py-4'>
    <div className="navbar w-[1200px] mx-auto">
  <div className="navbar-start">
  <span className='flex' onClick={() =>setOpen(!open)}>
         {
             open ?
              <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>
            }
            <ul className={`md:hidden absolute duration-1000 text-black
                ${open ? 'top-8' : '-top-40'}
                 bg-amber-200`}>  
        {links}
        </ul>
         
        <a href='#' className=""><img src={logo} alt='logo' /></a></span>
    
  </div>
  <div className="navbar-center hidden lg:flex">
   <ul className='md:flex hidden'>
             { 
               links
             }
           </ul>
  </div>
  <div className="navbar-end gap-2"> 
     <a href='#' className="btn"> <span className='flex items-center gap-2 mr-2'><ShoppingBag className='text-sm'></ShoppingBag> Login</span></a>

     
    <a href='#' className="th-btn">Get Started</a>
  </div>
</div>
</div>
  );
};

export default Navbar; 