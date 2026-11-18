"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  const navItem = (
    <>
      <Link href="/"><li className={`${isActive('/') ? 'bg-primary/20 rounded-full py-3 px-6 shadow-primary/40 border-primary text-primary' : ''} hover:bg-primary/20 hover:rounded-full hover:py-3 hover:px-6 hover:shadow-primary/40 hover:border-primary hover:text-primary px-6 py-3 mx-1 font-bold cursor-pointer transition-all duration-600 `}>Home</li></Link>
      <Link href="/projects"><li className={`${isActive('/projects') ? 'bg-primary/20 rounded-full py-3 px-6 shadow-primary/40 border-primary text-primary' : ''} hover:bg-primary/20 hover:rounded-full hover:py-3 hover:px-6 hover:shadow-primary/40 hover:border-primary hover:text-primary px-6 py-3 mx-1 font-bold cursor-pointer transition-all duration-600`}>Projects</li></Link>
      <Link href="/skills"><li className={`${isActive('/skills') ? 'bg-primary/20 rounded-full py-3 px-6 shadow-primary/40 border-primary text-primary' : ''} hover:bg-primary/20 hover:rounded-full hover:py-3 hover:px-6 hover:shadow-primary/40 hover:border-primary hover:text-primary px-6 py-3 mx-1 font-bold cursor-pointer transition-all duration-600`}>Skills</li></Link>
      <Link href="/contact"><li className={`${isActive('/contact') ? 'bg-primary/20 rounded-full py-3 px-6 shadow-primary/40 border-primary text-primary' : ''} hover:bg-primary/20 hover:rounded-full hover:py-3 hover:px-6 hover:shadow-primary/40 hover:border-primary hover:text-primary px-6 py-3 mx-1 font-bold cursor-pointer transition-all duration-600`}>Contact</li></Link>
      <Link href="/about"><li className={`${isActive('/about') ? 'bg-primary/20 rounded-full py-3 px-6 shadow-primary/40 border-primary text-primary' : ''} hover:bg-primary/20 hover:rounded-full hover:py-3 hover:px-6 hover:shadow-primary/40 hover:border-primary hover:text-primary px-6 py-3 mx-1 font-bold cursor-pointer transition-all duration-600`}>About</li></Link>
    </>
  );
  return (
    <div className='fixed top-0 left-0 w-[99%] py-2 bg-base/80 backdrop-blur-sm z-50'>
      <nav className=' justify-between items-center flex'>
        <h1 className='text-2xl font-bold ml-1 cursor-pointer transition-all duration-300 gradient-text' >Masum Hossain</h1>
        <ul className='hidden md:flex items-center'>
          {navItem}
          <a href="/contact"><button className='btn-primary ml-3'>Hire Me</button></a>
        </ul>
      </nav>

      {/* mobile nav */}
      <nav className=" absolute top-0 right-0 md:hidden">
        <div className="dropdown ">
          <div onClick={() => setIsOpen(!isOpen)} className='absolute top-0 right-2 text-2xl cursor-pointer text-primary p-2 rounded-md transition-all duration-300 flex items-end justify-end' >{isOpen ? <X /> : <Menu />}</div>
          <ul className={`backdrop-blur-xl bg-base/60 rounded-md shadow-primary/20 shadow-lg rounded-box z-1 mt-10 w-52 p-4 space-y-2
    absolute right-0 transition-transform duration-500 ease-out 
    ${isOpen ? 'translate-x-0 opacity-100 ' : 'translate-x-full opacity-0 pointer-events-none'} 
    md:hidden block`}>{navItem} <a href="/contact"><button className='btn-outline'>Hire Me</button></a>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
