import React from "react";
import Button from "../components/Button";

const Signup = () => {
  return (
    <div className="px-2 py-6">
      <div className="w-full max-w-md bg-white px-6 py-4">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-6">Create your <br /> PopX account</h2>

        {/* Full Name */}
        <div className="mb-4">
          <label className=" relative bg-white top-3 w-[20%] left-3 block text-sm font-semibold text-[#6c25ff] mb-1">
            Full Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#6c25ff]"
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-[#6c25ff] relative bg-white top-2 w-[30%] left-2 ">
            Phone number<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#6c25ff]"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className=" relative bg-white top-3 w-[30%] left-3 block text-sm font-semibold  text-[#6c25ff] mb-1">
            Email address<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#6c25ff]"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className=" relative bg-white top-3 w-[20%] left-3 block text-sm font-semibold text-[#6c25ff] mb-1">
            Password<span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#6c25ff]"
          />
        </div>

        {/* Company */}
        <div className="mb-4">
          <label className=" relative bg-white top-3 w-[30%] left-3 block text-sm font-semibold text-[#6c25ff] mb-1">
            Company name
          </label>
          <input
            type="text"
            placeholder="Company Name "
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#6c25ff]-500"
          />
        </div>

        {/* Radio */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Are you an Agency?<span className="text-red-500">*</span>
          </label>
          <div className="flex items-center gap-6">
            <label className="flex items-center">
              <input
                type="radio"
                name="agency"
                className="text-[#6c25ff] focus:ring-[#6c25ff] size-6"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="agency"
                className="text-[#6c25ff] focus:ring-[#6c25ff] size-6"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>

        {/* Button */}
        <Button
          name="Create Account"
          className="w-full bg-[#6c25ff] text-white py-3 rounded-md mt-[65%] "
        />
      </div>
    </div>
  );
};

export default Signup;
