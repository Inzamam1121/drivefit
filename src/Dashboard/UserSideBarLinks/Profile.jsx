import React from "react";
import { FcAddImage } from "react-icons/fc";
const Profile = () => {
  return (
    <div className="mt-4">
      <div className="flex justify-center items-center border-2 border-[gray] w-fit mx-auto p-7 border-dashed rounded-md">
        <FcAddImage className="text-5xl" />
      </div>
      <div className="  mx-auto w-[70%] my-6">
<form action="" >
    <div className="grid grid-cols-2 gap-7 mt-6 w-full py-10">
    <input type="text" className="py-2 px-3 outline-none shadow-md rounded placeholder:text-sm  placeholder:font-light placeholder:text-g3ray-500" placeholder="Full Name"/>
    <input type="text" className="py-2 px-3 outline-none shadow-md rounded placeholder:text-sm placeholder:font-light placeholder:text-gr3ay-500" placeholder="Gender"/>
    <input type="text" className="py-2 px-3 outline-none shadow-md rounded placeholder:text-sm placeholder:font-light placeholder:text-gr3ay-500" placeholder="Date of Birth"/>
    <input type="text" className="py-2 px-3 outline-none shadow-md rounded placeholder:text-sm placeholder:font-light placeholder:text-gr3ay-500" placeholder="Country"/>
    <input type="text" className="py-2 px-3 outline-none shadow-md rounded placeholder:text-sm placeholder:font-light placeholder:text-gr3ay-500" placeholder="City"/>
    <input type="text" className="py-2 px-3 outline-none shadow-md rounded placeholder:text-sm placeholder:font-light placeholder:text-gr3ay-500" placeholder="Username"/>
    <input type="text" className="py-2 px-3 outline-none shadow-md rounded placeholder:text-sm placeholder:font-light placeholder:text-gr3ay-500" placeholder="Email"/>
    <input type="text" className="py-2 px-3 outline-none shadow-md rounded placeholder:text-sm placeholder:font-light placeholder:text-gr3ay-500" placeholder="Mobile Number"/>
    </div>
    <button className="bg-[#013C91] w-full mx-auto py-3 rounded-md text-white transition-all duration-500 hover:scale-95">Add New Ride</button>
</form>
      </div>
    </div>
  );
};

export default Profile;
