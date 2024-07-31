"use client";
// components/AboutUs.js
import React from 'react';
import Officeimg from '../../assets/Officeimg.svg';
import Coffeeimg from '../../assets/Coffeeimg.svg';
import Cookingimg from '../../assets/Cookingimg.svg';



const AboutUs = () => {
    return (
        <div className="text-center p-20  flex flex-col items-center">
            <section id="about" className="flex items-center justify-between p-8">
                <div className="text-left ml-20 flex-1">
                    <h1 className="text-4xl font-bold ml-3 mb-4">What we do?</h1>
                    <div className='flex space-x-6'>
                        <p className='w-8 mt-2 h-56 bg-indigo-600'></p>
                        <p className="text-xl leading-relaxed">
                            Baksish allows restaurants to display their menus digitally.Our smart kitchen table technology allows customers to easily order directly from their phones, eliminating the hassle of physical menus and streamlining the ordering process. With our user-friendly interface, customers can browse the menu, customize their orders, and submit them to the manager with just a few taps.

                        </p>
                    </div>
                </div>
                <div className="flex-1 text-right flex justify-center">
                    <Officeimg className="w-96 h-full mx-auto md:mx-0" />
                </div>
            </section>
            <section id="about" className="flex mt-36 items-center justify-between p-8">
                <div className="flex-1 text-right flex justify-center">
                    <Coffeeimg className="w-96 h-full mx-auto md:mx-0" />
                </div>
                <div className="text-left ml-20 flex-1">
                    <h1 className="text-4xl font-bold ml-3 mb-4">Who Are We?</h1>
                    <div className='flex space-x-6'>
                        <p className='w-8 mt-2 h-48 bg-indigo-600'></p>
                        <p className="text-xl leading-relaxed">
                        Baksish introduces the ability to view the menu on their phones, customers can make informed decisions and explore the full range of offerings available.We understand that sometimes customers may need to make changes to their orders. With our smart kitchen table tech, customers can easily add to their existing orders until the bill is finalized.
                        </p>
                    </div>
                </div>

            </section>
            <section id="about" className="flex mt-36 items-center justify-between p-8">
                <div className="text-left ml-20 flex-1">
                    <h1 className="text-4xl font-bold ml-3 mb-4">Why choose us?</h1>
                    <div className='flex space-x-6'>
                        <p className='w-4 mt-2 h-90 bg-indigo-600'></p>
                        
                        <ol className='text-md leading-relaxed list-decimal px-4'>
                            <li>
                            Seamless Integration: Our smart kitchen table technology seamlessly integrates with the kitchen side of the software, enabling waiters to effectively mediate between customers and kitchen staff for accurate order communication and fulfillment.
                            </li>
                            <li>
                            Real-Time Order Updates: The system provides real-time updates on the status of each order, ensuring that both customers and staff are informed about the progress and any changes.
                            </li>
                            <li>
                            Inventory Management: We offer comprehensive inventory management services, allowing for efficient tracking and management of kitchen supplies to prevent shortages and overstocking.
                            </li>
                            <li>
                            Analytics: Our solution includes powerful analytics tools that provide valuable insights into operational efficiency, customer preferences, and overall performance to help optimize restaurant operations.
                            </li>
                            <li>
                            Tipping Service: We also provide a tipping service feature, facilitating smooth and transparent management of tips, ensuring fair distribution among staff members.
                            </li>
                        </ol>
                        
                    </div>
                </div>
                <div className="flex-1 text-right flex justify-center">
                    <Cookingimg className="w-96 h-full mx-auto md:mx-0" />
                </div>
            </section>


        </div>
    );
};

export default AboutUs;
