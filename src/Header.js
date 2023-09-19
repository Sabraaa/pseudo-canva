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

const Header = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <div className="header-container flex justify-between w-full border-b-2 h-20">
        {/* left side of header */}
        <div className="header-left-side flex justify-start p-6 items-center">
          <div className="cursor-pointer  hover:bg-slate-200 rounded p-2">
            {toggle ? (
              <>
                <Aside />
                <RiMenuFill
                  color="000"
                  size={20}
                  onClick={() => setToggle(false)}
                />
              </>
            ) : (
              <>
                <RiMenuFill
                  color="000"
                  size={20}
                  onClick={() => setToggle(true)}
                />
              </>
            )}
          </div>
          <img className="px-6 cursor-pointer" src={Logo} alt="logo" />
          {/* the dropdowns */}
          <div className="dropdown-container flex px-5 cursor-pointer text-base">
            <div className="cursor-pointer flex items-center hover:bg-slate-200 rounded p-2">
              <p>Design spotlight</p>
              <RiArrowDropDownLine color="000" size={25} />
              <div id="dropdownInformation" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
    <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
      <div>Bonnie Green</div>
      <div class="font-medium truncate">name@flowbite.com</div>
    </div>
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
    </ul>
    <div class="py-2">
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
    </div>
</div>
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

        {/* the right side of header */}
        <div className="header-right-side flex justify-end p-6 items-center">
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
            className=" cursor-pointer rounded-full w-10 h-10"
            src={Profile}
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
