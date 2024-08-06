"use client";
import React from 'react';
import Officeimg from '../../assets/Officeimg.svg';
import Coffeeimg from '../../assets/Coffeeimg.svg';
import Cookingimg from '../../assets/Cookingimg.svg';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true });
  const { ref: whoRef, inView: whoInView } = useInView({ triggerOnce: true });
  const { ref: whyRef, inView: whyInView } = useInView({ triggerOnce: true });

  return (
    <div className="text-center p-6 md:p-20 flex flex-col items-center">
      <section id="about" ref={aboutRef} className="flex flex-col md:flex-row items-center justify-between p-8 mb-36">
        <motion.div
          className="text-left md:ml-20 flex-1 flex flex-col justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: aboutInView ? 1 : 0, y: aboutInView ? 0 : 50 }}
          transition={{ duration:1 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">What we do?</h1>
          <div className='flex md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-6'>
            <div className='lg:block hidden w-8 h-56 bg-indigo-600'></div>
            <p className="text-lg md:text-xl leading-relaxed">
              Baksish allows restaurants to display their menus digitally. Our smart kitchen table technology allows customers to easily order directly from their phones, eliminating the hassle of physical menus and streamlining the ordering process. With our user-friendly interface, customers can browse the menu, customize their orders, and submit them to the manager with just a few taps.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="flex-1 flex justify-center mt-8 md:mt-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: aboutInView ? 1 : 0, y: aboutInView ? 0 : 50 }}
          transition={{ duration: 1 }}
        >
          <Officeimg className="w-80 md:w-96 h-auto" />
        </motion.div>
      </section>

      <section id="who" ref={whoRef} className="flex flex-col md:flex-row items-center justify-between p-8 mb-36">
        <motion.div
          className="flex-1 flex justify-center mt-8 md:mt-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: whoInView ? 1 : 0, y: whoInView ? 0 : 50 }}
          transition={{ duration: 0.6 }}
        >
          <Coffeeimg className="w-80 md:w-96 h-auto" />
        </motion.div>
        <motion.div
          className="text-left md:ml-20 flex-1 flex flex-col justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: whoInView ? 1 : 0, y: whoInView ? 0 : 50 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Who Are We?</h1>
          <div className='flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-6'>
            <div className='lg:block hidden w-8 h-56 bg-indigo-600'></div>
            <p className="text-lg md:text-xl leading-relaxed">
              Baksish introduces the ability to view the menu on their phones, allowing customers to make informed decisions and explore the full range of offerings available. We understand that sometimes customers may need to make changes to their orders. With our smart kitchen table tech, customers can easily add to their existing orders until the bill is finalized.
            </p>
          </div>
        </motion.div>
      </section>

      <section id="why" ref={whyRef} className="flex flex-col md:flex-row items-center justify-between p-8 mb-36">
        <motion.div
          className="text-left md:ml-20 flex-1 flex flex-col justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: whyInView ? 1 : 0, y: whyInView ? 0 : 50 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Why choose us?</h1>
          <div className='flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-6'>
            <div className='lg:block hidden w-8 h-56 bg-indigo-600'></div>
            <ol className='text-md md:text-lg leading-relaxed list-decimal px-4'>
              <li>Seamless Integration: Our smart kitchen table technology seamlessly integrates with the kitchen side of the software, enabling waiters to effectively mediate between customers and kitchen staff for accurate order communication and fulfillment.</li>
              <li>Real-Time Order Updates: The system provides real-time updates on the status of each order, ensuring that both customers and staff are informed about the progress and any changes.</li>
              <li>Inventory Management: We offer comprehensive inventory management services, allowing for efficient tracking and management of kitchen supplies to prevent shortages and overstocking.</li>
              <li>Analytics: Our solution includes powerful analytics tools that provide valuable insights into operational efficiency, customer preferences, and overall performance to help optimize restaurant operations.</li>
              <li>Tipping Service: We also provide a tipping service feature, facilitating smooth and transparent management of tips, ensuring fair distribution among staff members.</li>
            </ol>
          </div>
        </motion.div>
        <motion.div
          className="flex-1 flex justify-center mt-8 md:mt-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: whyInView ? 1 : 0, y: whyInView ? 0 : 50 }}
          transition={{ duration: 0.6 }}
        >
          <Cookingimg className="w-80 md:w-96 h-auto" />
        </motion.div>
      </section>
    </div>
  );
};

export default AboutUs;
