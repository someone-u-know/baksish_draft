"use client";
import React from "react";

import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import PrivacyPolicy from "./PrivacyPolicy";

const Footer = () => {
  return (
    <footer className="bg-indigo-600 mt-20 text-[#FFF9EA] py-12 lg:px-20 rounded-tl-3xl rounded-tr-3xl poppins-medium">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        <div>
          <div className="w-fit text-white text-5xl font-bold rounded-lg">
            baksish
          </div>
          <p>Table-to-kitchen tech</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Navigations</h3>
          <ul>
            <li className="mb-2 hover:underline">
              <Link href={"/#about"} className="mb-2 hover:underline">  
                About Us
              </Link>
            </li>
            <li className="mb-2 hover:underline">
              <Link href={"/FeedBack"} className="mb-2 hover:underline">
                Feedback
              </Link>
            </li>
            <li className="mb-2 hover:underline">
              <Link href={"https://quistblogger.netlify.app/"} target="_blank" className="mb-2 hover:underline">
                Blogs
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Getting Started</h3>
          <ul>
            <li className="mb-2 hover:underline">
              <Link href={"/Collaboratewithus"} className="mb-2 hover:underline">
                Request a demo
              </Link>
            </li>
            <li className="mb-2 hover:underline">
              <Link href={"/ContactUs"} className="mb-2 hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Customer Policy</h3>
          <ul>
            <li className="mb-2 hover:underline">
              <Link href={"/PrivacyPolicy"} className="mb-2 hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li className="mb-2 hover:underline" >
              <Link href={"/TermsAndConditions"} className="mb-2 hover:underline">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link href={"/RefundPolicy"} className="mb-2 hover:underline">
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex space-x-4">
          <h3 className="text-xl font-semibold mb-4">Social</h3>
          <ul className="flex mb-10 space-x-4">
            <Link href={"https://www.instagram.com/boywithastorybook/"} target="_blank" className="cursor-pointer hover:scale-90 duration-500">
              <FaLinkedin size={24} />
            </Link>
            <Link href={"https://www.instagram.com/boywithastorybook/"} target="_blank" className="cursor-pointer hover:scale-90 duration-500">
              <RiTwitterXLine size={24} />
            </Link>
            <Link href={"https://www.instagram.com/boywithastorybook/"} target="_blank" className="cursor-pointer hover:scale-90 duration-500">
              <FaInstagram size={24} />
            </Link>
            <Link href={"https://www.instagram.com/boywithastorybook/"} target="_blank" className="cursor-pointer hover:scale-90 duration-500">
              <FaFacebookF size={24} />
            </Link>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 px-4">
        <div className="mt-8 border-t border-white pt-8 flex justify-center items-center text-white text-sm">
          <p className="hidden lg:block">
            Copyright © 2024 Baksish<sup>TM</sup>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;