"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();

  const handleNavigation = async (path, id) => {
    if (router.pathname === path) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'auto' });
    } else {
      await router.push(path);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'auto' });
      }, 100); // Delay to ensure the DOM is updated
    }
  };

  return (
    <nav className="w-full fixed p-3 shadow-md top-0 left-0 bg-white z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div onClick={() => handleNavigation('/', 'root')} className="text-3xl cursor-pointer font-bold text-blue-600">
          baksish
        </div>
        <div className="text-semibold flex space-x-14 px-4">
          <button onClick={() => handleNavigation('/', 'about')} className="hover:text-blue-600">About Us</button>
          <button onClick={() => handleNavigation('/', 'bookademo')} className="hover:text-blue-600">Book a Demo</button>
          <button onClick={() => handleNavigation('/', 'pricingplan')} className="hover:text-blue-600">Pricing</button>
          <button onClick={() => handleNavigation('/', 'footer')} className="hover:text-blue-600">Contact Us</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
