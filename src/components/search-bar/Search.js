import React from "react";
import { IoMdSearch } from "react-icons/io";
import "./Search.module.css";

const Search = () => {
  return (
    <div className="flex">
      <div className="flex justify-between p-3 border-2 border-[#57534E] m-2 rounded-sm transition duration-75 sm:w-[35%] w-[70%]">
        <input
          className="w-[85%] focus:outline-none"
          placeholder="Departments and Programs"
        />
        <IoMdSearch className="" size={25}></IoMdSearch>
      </div>
      <p className="py-5 px-1">Viewing 1 of 1</p>
    </div>
  );
};

export default Search;
