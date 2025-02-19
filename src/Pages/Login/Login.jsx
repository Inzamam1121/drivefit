import React from 'react';
// import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import SideCard from '../../Components/Login/SideCard';


const Login = () => {
    return (
        <div className="lg:flex font-pop items-center justify-center">
            {/* Left Section */}
            <div className="basis-[50%] bg-white  flex flex-col items-center gap-6">
                <div>
                    {/* <img src={img} alt="" className='border bg-black'/> */}
                </div>

                <div className="w-[80%] md:w-[40%] text-center">
                    <h1 className="text-xl font-bold text-[#313131]">Login</h1>
                    <h6 className="text-[#656565] text-base">Login to access your travelwise account</h6>
                </div>

                {/* Login Form */}
                <form className="w-[90%] md:w-[50%]">
                    <div className="flex flex-col gap-4 mb-4">
                        <input
                            type="email"
                            placeholder="john.doe@gmail.com"
                            className="border rounded p-2 focus:outline-none w-full"
                        />

                        <div className="relative">
                            <input
                                type="password"
                                placeholder="Password"
                                className="border rounded p-2 w-full focus:outline-none"
                            />
                            <button type="button" className="absolute top-1/2 right-3 transform -translate-y-1/2">
                                {/* <FaEyeSlash className="text-gray-600" /> */}
                            </button>
                        </div>
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex justify-between items-center mb-3">
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-[#656565]">Remember me</span>
                        </label>
                        {/* <Link to="/forgetPassword">
                        </Link> */}
                        <p className="text-[#91ACB3] text-sm">Forgot Password?</p>
                    </div>

                    {/* Submit Button */}
                    {/* <Button text="Submit" className="bg-[#0066F5] text-white p-2 w-full rounded" /> */}
                    <Link to={"/dashboard/ads"}>
                    <button text="Submit" className=" bg-[black] text-white font-light py-2 px-5 rounded-md shadow-[2px_3px_1px_gray] hover:bg-gray-900 transition-all duration-300 w-full">Submit</button>
                    </Link>

                    {/* Signup Link */}
                    <div className="text-center mt-6">
                        <Link to="/signup">
                            <p className="text-[#656565]">
                                Don't have an account? <span className="text-[#0066F5]">Sign up</span>
                            </p>
                        </Link>
                    </div>
                </form>
            </div>

            {/* Right Section (SideCard) */}
            <div className="basis-[50%] lg:block hidden">
                <SideCard text="Login"/>
            </div>
        </div>
    );
};

export default Login;
