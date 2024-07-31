
"use client";
import React, { useState } from "react";

function Pricing() {


    const [starterPlan, setStarterPlan] = useState({
        month: 849,
        quarter: 799,
        halfYear: 749,
    });
    const [proPlan, setProPlan] = useState({
        month: 0, // Assuming the Pro plan is not available yet
        quarter: 0,
        halfYear: 0,
    });
    const [selectedPlan, setSelectedPlan] = useState("month");

    const handlePlanChange = (plan) => {
        setSelectedPlan(plan);
    };


    return (
        <>

            <div className="mt-36">
                <section className="">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                        <div className="mx-auto max-w-screen-md mt-10 text-center mb-8 lg:mb-12">
                            <h2 className=" text-2xl tracking-tight font-extrabold text-black ">
                                Designed for business teams like yours
                            </h2>
                            {/* <p className="mb-5 font-light text-gray-500 sm:text-xl ">
                Here at Flowbite we focus on markets where technology, innovation,
                and capital can unlock long-term value and drive economic growth.
              </p> */}

                            {/* breadcrumb */}
                            <div className="m-6 w-3/4 inline-flex bg-white rounded-md shadow-lg" role="group">
                                <button
                                    type="button"
                                    onClick={() => handlePlanChange("month")}
                                    className={`px-4 py-2 text-lg font-semibold text-black w-full border border-gray-900 rounded-s-lg hover:bg-indigo-600 hover:text-white ${selectedPlan === "month" ? "bg-indigo-600 text-white" : ""}`}
                                >
                                    Monthly
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handlePlanChange("quarter")}
                                    className={`px-4 py-2 text-lg font-semibold text-black  w-full border-t border-b border-gray-900 hover:bg-indigo-600 hover:text-white ${selectedPlan === "quarter" ? "bg-indigo-600 text-white" : ""}`}
                                >
                                    Quarterly
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handlePlanChange("halfYear")}
                                    className={`px-4 py-2 text-lg font-semibold text-black  w-full border border-gray-900 rounded-e-lg hover:bg-indigo-600 hover:text-white ${selectedPlan === "halfYear" ? "bg-indigo-600 text-white" : ""}`}
                                >
                                    Half-Yearly
                                </button>
                            </div>
                        </div>

                        <div className=" lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
                            {/* Pricing Card */}
                            <div className="flex flex-col p-6 w-full text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow-2xl xl:p-8 hover:scale-95 duration-700 hover:bg-indigo-600 hover:text-white group">
                                <h3 className="mb-4 text-2xl font-bold uppercase">Starter</h3>
                                <hr className="border border-slate-500/20 rounded-full group-hover:border-yellow-50/40" />
                                <div className="flex justify-center items-baseline my-8">
                                    <span className="mr-2 text-5xl font-extrabold">₹{starterPlan[selectedPlan]}</span>
                                    <span className="text-gray-500 group-hover:text-yellow-50/40">/month</span>
                                </div>
                                {/* List */}
                                <ul role="list" className="mb-8 space-y-4 text-left">
                                    <li className="flex items-center space-x-3">
                                        {/* Icon */}
                                        <svg
                                            className="flex-shrink-0 w-5 h-5 text-green-500 "
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>Automated ordering system</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        {/* Icon */}
                                        <svg
                                            className="flex-shrink-0 w-5 h-5 text-green-500 "
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>No setup, or hidden fees</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        {/* Icon */}
                                        <svg
                                            className="flex-shrink-0 w-5 h-5 text-green-500 "
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>
                                            14 days <strong>FREE</strong> trial
                                        </span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        {/* Icon */}
                                        <svg
                                            className="flex-shrink-0 w-5 h-5 text-green-500 "
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>
                                            Customizable menu options
                                        </span>
                                    </li>
                                </ul>
                                <a
                                    href="/Collaboratewithus"
                                    className="text-white bg-indigo-600 focus:ring-2 focus:ring-amber-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center group-hover:text-black group-hover:bg-white"
                                >
                                    Get started
                                </a>
                            </div>

                            {/* Pricing Card */}
                            <div className="flex flex-col p-6 w-full text-center text-stone-200 bg-gray-500/10 rounded-lg border  border-gray-100 shadow-2xl  xl:p-8 group">
                                <h3 className="mb-4 text-2xl font-bold uppercase text-gray-400">Pro</h3>
                                <hr className="border border-slate-500/20 rounded-full" />
                                <div className="flex justify-center items-baseline my-8">
                                    <span className="mr-2 text-5xl font-extrabold text-gray-400 animate-bounce">We are cooking !</span>
                                </div>
                                {/* List */}
                                <ul role="list" className="mb-8 space-y-4 text-[#818d96] text-left">
                                    <li className="flex items-center space-x-3">
                                        {/* Icon */}
                                        <svg
                                            className="flex-shrink-0 w-5 h-5 text-green-500 "
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>Automated Inventory Management System</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        {/* Icon */}
                                        <svg
                                            className="flex-shrink-0 w-5 h-5 text-green-500 "
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>Crazy Insights of your data</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        {/* Icon */}
                                        <svg
                                            className="flex-shrink-0 w-5 h-5 text-green-500 "
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>
                                            Monthly reports and rewards
                                        </span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        {/* Icon */}
                                        <svg
                                            className="flex-shrink-0 w-5 h-5 text-green-500 "
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>
                                            Customizable Services
                                        </span>
                                    </li>
                                </ul>
                                <a
                                    href="#"
                                    className="text-stone-200 bg-gray-700/30 focus:ring-2 focus:ring-amber-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                >
                                    Coming Soon
                                </a>
                            </div>
                        </div>
                        <div className=" text-xl tracking-tight text-center  p-10 font-extrabold text-black">
                            <span>You Can contact us to get Customised Plans</span>
                        </div>
                        
                    </div>
                </section>
            </div>
        </>
    )
}

export default Pricing;