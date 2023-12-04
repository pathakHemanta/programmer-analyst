import React from "react";
import { IoMdMenu } from "react-icons/io";
import { CgPlayListCheck } from "react-icons/cg";
import { IoChevronBackSharp } from "react-icons/io5";
import "./NavigationBar.module.css";

const NavigationBar = () => {
  return (
    <header id="navigation" className="text-white">
      <nav className="flex justify-between bg-[#501214]">
        <div className="flex gap-1">
          <div className="p-3 bg-[#340507]">
            <IoMdMenu className="" size={20} />
            <p className="text-[0.4rem]">MENU</p>
          </div>
          <CgPlayListCheck
            className="mt-4 bg-white text-[#501214] rounded-sm"
            size={20}
          />
          <h1 className="pt-3">Outcomes Assessment</h1>
        </div>
        <div className="relative my-auto mr-2">
          <p className="bg-white text-[#340507] font-bold rounded-full p-2">
            WW
          </p>
        </div>
      </nav>
      <nav className="flex text-black bg-[#E7E5E4] pl-[2%] py-2">
        <IoChevronBackSharp className="mt-1" />
        <h1 className="inline">Applied Arts Department</h1>
      </nav>
    </header>
  );
};

export default NavigationBar;
