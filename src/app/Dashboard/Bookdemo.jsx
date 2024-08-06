"use client";
import React, { useState } from "react";
import Demoimg from "../../assets/Demoimg.svg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast"; // Assuming you're using react-hot-toast for notifications
import Image from "next/image";

// Form validation schema using Yup
const validationSchema = Yup.object().shape({
  restaurantName: Yup.string().required("Restaurant name is required"),
  name: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "Name must contain only alphabets.")
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
        toast.success(
          "Your request has been successfully sent and will be reviewed."
        );
      } else if (res.status === 203) {
        setIsLoading(false);
        setSubmitting(false);
        toast.error(
          "A request has already been sent and is in process for this email address."
        );
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
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      <Toaster />
      <section className="w-screen grid lg:grid-cols-2 grid-cols-1 gap-4 justify-items-stretch items-center  px-4 lg:px-44 py-10">
        <Demoimg />
        <div className=" bg-zinc-200 p-6 mt-10 rounded-xl shadow-lg">
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
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="mb-6 relative">
                  <label className="block text-zinc-800">
                    Restaurant name<sup className="text-rose-500">*</sup>
                  </label>
                  <input
                    type="text"
                    name="restaurantName"
                    placeholder="Restaurant name"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.restaurantName}
                  />
                  {touched.restaurantName && errors.restaurantName && (
                    <div className="text-red-500 absolute text-sm">
                      {errors.restaurantName}
                    </div>
                  )}
                </div>
                <div className="mb-6 relative">
                  <label className="block text-zinc-800">
                    Name<sup className="text-rose-500">*</sup>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  {touched.name && errors.name && (
                    <div className="text-red-500 absolute text-sm">
                      {errors.name}
                    </div>
                  )}
                </div>
                <div className="mb-6 relative">
                  <label className="block text-zinc-800">
                    Email<sup className="text-rose-500">*</sup>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter work email"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {touched.email && errors.email && (
                    <div className="text-red-500 absolute text-sm">
                      {errors.email}
                    </div>
                  )}
                </div>
                <div className="mb-6 relative">
                  <label className="block text-zinc-800">
                    Phone<sup className="text-rose-500">*</sup>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter phone number"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                  />
                  {touched.phone && errors.phone && (
                    <div className="text-red-500 absolute text-sm">
                      {errors.phone}
                    </div>
                  )}
                </div>
                <div className="mb-6 relative">
                  <label className="block text-zinc-800">
                    Address<sup className="text-rose-500">*</sup>
                  </label>
                  <textarea
                    name="address"
                    placeholder="Enter your address"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address}
                  />
                  {touched.address && errors.address && (
                    <div className="text-red-500 absolute text-sm">
                      {errors.address}
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-indigo-600 hover:scale-95 duration-500 text-white p-2 rounded-md w-full"
                  disabled={isSubmitting || isLoading}
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
                <p className="text-center mt-px">
                  All <sup className="text-rose-500">*</sup> marked are required
                </p>
              </form>
            )}
          </Formik>
        </div>
      </section>
    </div>
  );
}

export default Page;
