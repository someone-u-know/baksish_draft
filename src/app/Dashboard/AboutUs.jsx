"use client";
import React from "react";
import Officeimg from "../../assets/Officeimg.svg";
import Coffeeimg from "../../assets/Coffeeimg.svg";
import Cookingimg from "../../assets/Cookingimg.svg";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const AboutUs = () => {
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
  });
  const { ref: whoRef, inView: whoInView } = useInView({ triggerOnce: true });
  const { ref: whyRef, inView: whyInView } = useInView({ triggerOnce: true });

  return (
    <div className="text-center p-6 lg:px-20 flex flex-col items-center">
      <section
        id="about"
        ref={aboutRef}
        className="flex flex-col lg:flex-row items-center justify-between p-8 mb-36"
      >
        <motion.div
          className="text-left lg:ml-20 flex-1 flex flex-col justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: aboutInView ? 1 : 0, y: aboutInView ? 0 : 50 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">What we do?</h1>
          <div className="flex lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-6">
            <div className="lg:block hidden w-8 h-56 bg-indigo-600"></div>
            <p className="text-lg lg:text-xl leading-relaxed">
              Baksish allows restaurants to display their menus digitally. Our
              smart kitchen table technology allows customers to easily order
              directly from their phones, eliminating the hassle of physical
              menus and streamlining the ordering process. With our
              user-friendly interface, customers can browse the menu, customize
              their orders, and submit them to the manager with just a few taps.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="flex-1 flex justify-center mt-8 lg:mt-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: aboutInView ? 1 : 0, y: aboutInView ? 0 : 50 }}
          transition={{ duration: 1 }}
        >
          <Officeimg className="w-80 lg:w-96 h-auto" />
        </motion.div>
      </section>

      <section
        id="who"
        ref={whoRef}
        className="flex flex-col lg:flex-row items-center justify-between p-8 mb-36"
      >
        <motion.div
          className="flex-1 flex justify-center mt-8 lg:mt-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: whoInView ? 1 : 0, y: whoInView ? 0 : 50 }}
          transition={{ duration: 0.6 }}
        >
          <Coffeeimg className="w-80 lg:w-96 h-auto" />
        </motion.div>
        <motion.div
          className="text-left lg:ml-20 flex-1 flex flex-col justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: whoInView ? 1 : 0, y: whoInView ? 0 : 50 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Who Are We?</h1>
          <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-6">
            <div className="lg:block hidden w-8 h-56 bg-indigo-600"></div>
            <p className="text-lg lg:text-xl leading-relaxed">
              Baksish introduces the ability to view the menu on their phones,
              allowing customers to make informed decisions and explore the full
              range of offerings available. We understand that sometimes
              customers may need to make changes to their orders. With our smart
              kitchen table tech, customers can easily add to their existing
              orders until the bill is finalized.
            </p>
          </div>
        </motion.div>
      </section>

      <section
        id="why"
        ref={whyRef}
        className="flex flex-col lg:flex-row items-center justify-between p-8 mb-36"
      >
        <motion.div
          className="text-left lg:ml-20  flex-1 flex flex-col justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: whyInView ? 1 : 0, y: whyInView ? 0 : 50 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Why choose us?
          </h1>
          <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-6">
            <div className="lg:block hidden  w-1.5 h-56 bg-indigo-600"></div>
            <ol className="text-lg lg:text-lg leading-relaxed list-decimal px-4">
              <li>
                Seamless Integration with kitchen software for accurate order
                communication.
              </li>
              <li>
                Real-Time Order Updates to keep customers and staff informed.
              </li>
              <li>Efficient Inventory Management to track kitchen supplies.</li>
              <li>
                Powerful Analytics tools for insights into operations and
                customer preferences.
              </li>
              <li>
                Tipping Service for smooth and fair tip distribution among
                staff.
              </li>
            </ol>
          </div>
        </motion.div>
        <motion.div
          className="flex-1 flex justify-center mt-8 lg:mt-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: whyInView ? 1 : 0, y: whyInView ? 0 : 50 }}
          transition={{ duration: 0.6 }}
        >
          <Cookingimg className="w-80 lg:w-96 h-auto" />
        </motion.div>
      </section>
    </div>
  );
};

export default AboutUs;
