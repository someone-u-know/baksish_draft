"use client";
import React from 'react';
import Chefimg from '../../assets/Chefimg.svg';

function DashboardMain() {
  return (
    <div className="text-center flex flex-col md:flex-row items-center justify-center  md:p-32 space-y-8 md:space-y-0 md:space-x-8">
      <div>
        <ul className="text-3xl text-left md:text-6xl font-semibold">
          <li>Revolutionizing</li>
          <li>Restaurant</li>
          <li>Operations<span className=' text-indigo-600'>.</span></li>
          
        </ul>
      </div>
      <div>
        <Chefimg className="w-96 h-full mx-auto md:mx-0" />
      </div>
    </div>
  );
}

export default DashboardMain;
