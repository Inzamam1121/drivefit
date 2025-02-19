import React from "react";
import { BsBellFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { VscMenu } from "react-icons/vsc";
const SearchBar = () => {
  return (
    <div className="flex md:justify-end md:gap-10 w-[90%] mx-auto py-5 items-center text-[#191919] justify-between">
      <div>
        <VscMenu className="text-2xl" />
      </div>
      <BsBellFill className="cursor-pointer text-gray-500 text-xl" />
      <div className="relative md:w-[40%]">
        <input
          type="search"
          className="bg-white shadow-md outline-none w-full py-2 pl-10 pr-3 rounded placeholder:text-sm"
          placeholder="Search here..."
        />
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
    </div>
  );
};

export default SearchBar;
