'use client';


import Header from "@/components/Header";
import React, {} from "react";

 const Register = () => {
 
 
        return(
            <>
            <Header/>
           

       
       <form className="max-w-3xl mx-auto p-6 mt-3 bg-white rounded shadow-md border-4">
  <h2 className="text-4xl font-bold mb-6 text-center">Student Signup</h2>
  <div className="mb-4">
    <label htmlFor="name" className="block font-semibold mb-2 text-2xl">
      Name<span className="text-red-500">*</span>

    </label>
    <input
      type="text"
      id="name"
      name="name"
      className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
      placeholder="Enter your name"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="rollNo" className="block font-semibold mb-2 text-2xl">
      Roll No<span className="text-red-500">*</span>

    </label>
    <input
      type="text"
      id="rollNo"
      name="rollNo"
      className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
      placeholder="Enter your roll number"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="mobileNo" className="block font-semibold mb-2 text-2xl">
      Mobile No<span className="text-red-500">*</span>

    </label>
    <input
      type="text"
      id="mobileNo"
      name="mobileNo"
      className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
      placeholder="Enter your mobile number e.g +92 xxxx-nnnnnn"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="email" className="block font-semibold mb-2 text-2xl">
      Email<span className="text-red-500">*</span>

    </label>
    <input
      type="email"
      id="email"
      name="email"
      className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
      placeholder="Enter your email address"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="fatherName" className="block font-semibold mb-2 text-2xl">
      Father's Name<span className="text-red-500">*</span>

    </label>
    <input
      type="text"
      id="fatherName"
      name="fatherName"
      className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
      placeholder="Enter your father's name"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="gender" className="block font-semibold mb-2 text-2xl">
      Gender<span className="text-red-500">*</span>

    </label>
    <select
      id="gender"
      name="gender"
      className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
    >
      <option value="" disabled="" selected="">
        Select your gender
      </option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
  </div>
  <div className="mt-6">
    <button
      type="submit"
      className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none"
    >
      Sign Up
    </button>
  </div>
</form>


            </>
        )
    }
    export default Register