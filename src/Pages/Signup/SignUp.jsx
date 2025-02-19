import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import SideCard from "../../Components/Login/SideCard";
// import Button from '../../Components/Auth/Button';
// import SideCard from '../../Components/Auth/SideCard';
import img from "../../../public/Images/Login/DrivefitLogo.png";
const SignUp = () => {
  return (
    <div className="lg:flex font-pop items-center justify-center">
      {/* Left Section */}
      <div className="basis-[50%] bg-white  flex flex-col items-center gap-6">
        <div className="flex justify-center mt-4">
          <img src={img} alt="" className="w-[50%]" />
        </div>

        <div className="w-[80%] md:w-[60%] text-center">
          <h1 className="text-xl font-bold text-[#313131]">SignUp</h1>
          <h6 className="text-[#656565] text-base">
            Let’s get you all st up so you can access your personal account.
          </h6>
        </div>

        {/* Login Form */}
        <form className="w-[90%] md:w-[80%]">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-4">
            <input
              type="name"
              placeholder="First Name"
              className="border rounded p-2 focus:outline-none w-full"
            />
            <input
              type="name"
              placeholder="Last Name"
              className="border rounded p-2 focus:outline-none w-full"
            />
            <input
              type="email"
              placeholder="john.doe@gmail.com"
              className="border rounded p-2 focus:outline-none w-full"
            />
            <input
              type="number"
              placeholder="Phone Number"
              className="border rounded p-2 focus:outline-none w-full"
            />

            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="border rounded p-2 w-full focus:outline-none"
              />
              <button
                type="button"
                className="absolute top-1/2 right-3 transform -translate-y-1/2"
              >
                <FaEyeSlash className="text-gray-600" />
              </button>
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="Confirm Password"
                className="border rounded p-2 w-full focus:outline-none"
              />
              <button
                type="button"
                className="absolute top-1/2 right-3 transform -translate-y-1/2"
              >
                <FaEyeSlash className="text-gray-600" />
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center mb-3">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-[#656565]">
                I agree to all the <span className="text-[#0066F5]">Terms</span>{" "}
                and <span className="text-[#0066F5]">Privacy Policies</span>
              </span>
            </label>
            {/* <Link to="/forgetPassword">
                        </Link> */}
            {/* <p className="text-[#91ACB3] text-sm">Forgot Password?</p> */}
          </div>
          {/* Submit Button */}
          {/* <Button text="Submit" className="bg-[#0066F5] text-white p-2 w-full rounded" /> */}
          <Link to={"/login"}>
          <button
            text="Submit"
            className="bg-[black] text-white font-light py-2 px-5 rounded-md shadow-[2px_3px_1px_gray] hover:bg-gray-900 transition-all duration-300 w-full"
          >
            Create Account
          </button>
          </Link>

          {/* Signup Link */}
          <div className="text-center mt-6">
            <Link to="/login">
              <p className="text-[#656565]">
                Already have an account?{" "}
                <span className="text-[#0066F5]">Login</span>
              </p>
            </Link>
          </div>
        </form>
      </div>

      {/* Right Section (SideCard) */}
      <div className="basis-[50%] lg:block hidden">
        <SideCard text="SignUp"/>
      </div>
    </div>
  );
};

export default SignUp;
