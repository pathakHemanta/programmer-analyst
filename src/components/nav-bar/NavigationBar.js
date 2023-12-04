import React from "react";
import { IoMdMenu } from "react-icons/io";
import { CgPlayListCheck } from "react-icons/cg";
import { IoChevronBackSharp } from "react-icons/io5";
import "./NavigationBar.module.css";

const NavigationBar = ({ profilePicture }) => {
  return (
    <header id="navigation" className="text-white">
      <nav className="flex justify-between bg-[#501214]">
        <div className="flex gap-1">
          <button className="p-3 bg-[#340507]">
            <IoMdMenu className="" size={20} />
            <p className="text-[0.4rem]">MENU</p>
          </button>

          <button className="flex gap-1">
            <CgPlayListCheck
              className="mt-4 bg-white text-[#501214] rounded-sm"
              size={20}
            />
            <h1 className="pt-3">Outcomes Assessment</h1>
          </button>
        </div>
        <div className="relative my-auto mr-2">
          <button className="bg-white text-[#340507] font-semibold rounded-full p-2 tracking-tighter">
            {profilePicture}
          </button>
          <span className="absolute rounded-full h-3 w-3 bg-sky-500 right-[0.01rem] bottom-[0.05rem]"></span>
        </div>
      </nav>
      <nav className="bg-[#E7E5E4]">
        <button className="flex text-black  pl-[2%] py-2">
          <IoChevronBackSharp className="mt-1" />
          <h1 className="inline">Applied Arts Department and Programs</h1>
        </button>
      </nav>
    </header>
  );
};

export default NavigationBar;
