import React, { useState } from "react";
import Logo from "../src/assets/logo.svg";
import Aside from "./Aside";
import Profile from "../src/assets/avatar.jpeg";
import {
  RiMenuFill,
  RiArrowDropDownLine,
  RiComputerLine,
  RiSettings2Line,
  RiNotification2Line,
} from "react-icons/ri";

const Header = ({ handleToggle }) => {
  return (
    <div>
      {/* CONTAINER */}
      <div className="flex justify-between w-full border-b-2 h-20">
        {/* LEFT SIDE OF THE HEADER */}
        <div className="flex justify-start p-6 items-center">
          <div className="cursor-pointer  hover:bg-slate-200 rounded p-2">
            <RiMenuFill
              color="000"
              size={20}
              onClick={() => handleToggle((prev) => !prev)}
            />
          </div>
          <img className="px-6 cursor-pointer" src={Logo} alt="logo" />
          {/*THE DROPDOWNS */}
          <div className="flex px-5 cursor-pointer text-base">
            <div className="cursor-pointer flex items-center hover:bg-slate-200 rounded p-2">
              <p>Design spotlight</p>
              <RiArrowDropDownLine color="000" size={25} />
            </div>
            <div className="cursor-pointer flex items-center hover:bg-slate-200 rounded p-2">
              <p>Business</p>
              <RiArrowDropDownLine color="000" size={25} />
            </div>
            <div className="cursor-pointer flex items-center hover:bg-slate-200 rounded p-2">
              <p>Education</p>
              <RiArrowDropDownLine color="000" size={25} />
            </div>
            <div className="cursor-pointer flex items-center hover:bg-slate-200 rounded p-2">
              <p>Plans and pricing</p>
              <RiArrowDropDownLine color="000" size={25} />
            </div>
            <div className="cursor-pointer flex items-center hover:bg-slate-200 rounded p-2">
              <p>Learn</p>
              <RiArrowDropDownLine color="000" size={25} />
            </div>
          </div>
        </div>

        {/* THE RIGHT SIDE OF THE HEADER*/}
        <div className="flex justify-end p-6 items-center">
          <div className="icons flex ">
            <div className="cursor-pointer p-3  hover:bg-slate-200 rounded">
              <RiComputerLine color="000" size={22} />
            </div>
            <div className="cursor-pointer p-3  hover:bg-slate-200 rounded">
              <RiSettings2Line color="000" size={22} />
            </div>
            <div className="cursor-pointer p-3  hover:bg-slate-200 rounded">
              <RiNotification2Line color="000" size={22} />
            </div>
          </div>
          <button
            className="w-22 h-9 rounded text-sm px-3 bg-violet-400 text-white mx-4"
            type="button"
          >
            Create a design
          </button>
          <img
            className="cursor-pointer rounded-full w-10 h-10"
            src={Profile}
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
