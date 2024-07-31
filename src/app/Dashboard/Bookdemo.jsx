"use client";
import React, { useState } from "react";
import Demoimg from '../../assets/Demoimg.svg';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ClipLoader } from "react-spinners";
import axios from "axios";


// Form validation schema using Yup
const validationSchema = Yup.object().shape({
    restaurantName: Yup.string()
        .required("Restaurant name is required"),
    name: Yup.string()
        .matches(/^[A-Za-z]+$/, "Name must contain only alphabets.")
        .required("Name is required"),
    email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    phone: Yup.string()
        .required("Phone is required")
        .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
    address: Yup.string().required("Address is required"),
});

function Page() {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        setIsLoading(true);
        try {
            const res = await axios.post(`/api/sendemail`, values);
            if (res.data.success) {
                setIsLoading(false);
                setSubmitting(false);
                toast.success("Your request has been successfully sent and will be reviewed.");
            } else if (res.status === 203) {
                setIsLoading(false);
                setSubmitting(false);
                toast.error("A request has already been sent and is in process for this email address.");
            } else {
                setIsLoading(false);
                setSubmitting(false);
                toast.error("An error occurred.");
            }
        } catch (error) {
            setIsLoading(false);
            setSubmitting(false);
            toast.error("An error occurred.");
        }
        resetForm();
    };

    return (
        <div>


            <section className="flex flex-col items-center justify-center pt-24 py-10">
                <div className="max-w-5xl w-full rounded-md ">
                    <div className="flex flex-col md:flex-row space-x-20 items-center">
                        <div className="hidden md:block md:w-1/2">
                            {/* Replace this with your SVG image */}
                            <Demoimg lassName="w-96 h-full mx-auto md:mx-0" />
                        </div>
                        <div className="w-full shadow-xl rounded-xl p-10 bg-gray-200 md:w-1/2">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Schedule a Free Demo</h2>
                            <p className="text-gray-600 mb-3">
                                Get in touch with our team to clarify your queries
                            </p>
                            <Formik
                                initialValues={{
                                    restaurantName: "",
                                    name: "",
                                    email: "",
                                    phone: "",
                                    address: "",
                                }}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ isSubmitting }) => (
                                    <Form>
                                        <div className="mb-4 relative">

                                            <Field
                                                type="text"
                                                name="restaurantName"
                                                placeholder="Restaurant Name"
                                                className="w-full p-3 border border-gray-300 rounded-md"
                                            />
                                            <ErrorMessage
                                                name="restaurantName"
                                                component="div"
                                                className="text-red-500 absolute text-sm"
                                            />
                                        </div>
                                        <div className="mb-4 relative">

                                            <Field
                                                type="text"
                                                name="name"
                                                placeholder="Your Name"
                                                className="w-full p-3 border border-gray-300 rounded-md"
                                            />
                                            <ErrorMessage
                                                name="name"
                                                component="div"
                                                className="text-red-500 absolute text-sm"
                                            />
                                        </div>
                                        <div className="mb-4 relative">

                                            <Field
                                                type="email"
                                                name="email"
                                                placeholder="Enter work email"
                                                className="w-full p-3 border border-gray-300 rounded-md"
                                            />
                                            <ErrorMessage
                                                name="email"
                                                component="div"
                                                className="text-red-500 absolute text-sm"
                                            />
                                        </div>
                                        <div className="mb-4 relative">

                                            <Field
                                                type="text"
                                                name="phone"
                                                placeholder="Enter phone number"
                                                className="w-full p-3 border border-gray-300 rounded-md"
                                            />
                                            <ErrorMessage
                                                name="phone"
                                                component="div"
                                                className="text-red-500 absolute text-sm"
                                            />
                                        </div>
                                        <div className="mb-4 relative">

                                            <Field
                                                as="textarea"
                                                name="address"
                                                placeholder="Enter your address"
                                                className="w-full p-3 border resize-none border-gray-300 rounded-md"
                                            />
                                            <ErrorMessage
                                                name="address"
                                                component="div"
                                                className="text-red-500 absolute text-sm"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="bg-indigo-600 h-12 text-white py-2.5 rounded-md w-full"
                                            disabled={isSubmitting}
                                        >
                                            {isLoading ? (
                                                <ClipLoader
                                                    size={18}
                                                    color={"#ffffff"}
                                                    loading={isLoading}
                                                />
                                            ) : (
                                                "Submit"
                                            )}
                                        </button>
                                        <p className="text-center text-xs mt-2">
                                            All <sup className="text-red-500">*</sup> fields are required
                                        </p>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Page;
