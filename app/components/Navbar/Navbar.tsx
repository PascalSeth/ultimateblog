'use client'
import {  Wallet, Wifi } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import SideNav from '../Sheet/page';



function Navbar() {
  return (
    <div>
      <nav className="fixed flex items-center justify-between z-50 top-0 right-0 left-0 w-full p-6 bg-white shadow-md">
        <SideNav />
        <div className="flex items-center space-x-3">
          <Link href='/wallet' className='bg-gray-600 w-fit text-white px-3 flex items-center py-3 rounded-[1pc]'>
            <Wallet className='mr-3' />
            <h1>My Wallet</h1>
          </Link>
          <Link href='/buy-data' className='bg-gray-600 w-fit text-white px-3 flex items-center py-3 rounded-[1pc]'>
            <Wifi className='mr-3' />
            <h1>Buy Bundle</h1>
          </Link>
        </div>
      </nav>
      {/* Add some padding or margin to avoid content being hidden behind the navbar */}
      <div className="pt-24"> 
        {/* Other content goes here */}
      </div>
    </div>
  );
}

export default Navbar;
