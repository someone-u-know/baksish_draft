"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = async (path, id) => {
   
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    
  };

  return (
    <nav className="w-full fixed p-3 shadow-md top-0 left-0 bg-white z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div
          onClick={() => handleNavigation("/", "root")}
          className="text-3xl cursor-pointer font-bold text-indigo-600"
        >
          baksish
        </div>
        <div className="hidden md:flex text-semibold space-x-14 px-4">
          <button
            onClick={() => handleNavigation("/", "about")}
            className="hover:text-indigo-600"
          >
            About Us
          </button>
          <button
            onClick={() => handleNavigation("/", "bookademo")}
            className="hover:text-indigo-600"
          >
            Book a Demo
          </button>
          <button
            onClick={() => handleNavigation("/", "pricingplan")}
            className="hover:text-indigo-600"
          >
            Pricing
          </button>
          <button
            onClick={() => handleNavigation("/", "footer")}
            className="hover:text-indigo-600"
          >
            Contact Us
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl text-indigo-600"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } bg-white shadow-md mt-2 absolute  top-14 w-44 drop-shadow-md border right-6`}
      >
        <div className="flex flex-col items-center py-2 space-y-2">
          <button
            onClick={() => {
              handleNavigation("/", "about");
              setIsMenuOpen(false);
            }}
            className="hover:text-indigo-600"
          >
            About Us
          </button>
          <button
            onClick={() => {
              handleNavigation("/", "bookademo");
              setIsMenuOpen(false);
            }}
            className="hover:text-indigo-600"
          >
            Book a Demo
          </button>
          <button
            onClick={() => {
              handleNavigation("/", "pricingplan");
              setIsMenuOpen(false);
            }}
            className="hover:text-indigo-600"
          >
            Pricing
          </button>
          <button
            onClick={() => {
              handleNavigation("/", "footer");
              setIsMenuOpen(false);
            }}
            className="hover:text-indigo-600"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
