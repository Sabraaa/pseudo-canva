import React from "react";
import { RiArrowDropDownLine, RiSearch2Line } from "react-icons/ri";
import Aside from "./Aside";

const Navbar = () => {
  return (
    <div>
      {/* GRADIENT BOX */}
      <div className={`bg-gradient-to-r from-emerald-200 from-10% via-sky-200 via-30% to-indigo-300 to-90% 
      rounded-md px-80 m-4 flex flex-col justify-center items-center
       ${ Aside ? '-[calc(100% - 209.64px)] ' : 'w-screen'
}`}>
        <h1>What will you design today?</h1>
        {/* input */}
        <div className=" flex border items-center rounded-md hover:border-stone-400 focus:border-blue-300 lg:hidden">
          <RiSearch2Line
            color="000"
            size={40}
            className="flex items-center justify-between bg-white px-2 rounded-l-md"
          />
          <input
            type="text"
            placeholder="search your content"
            className="h-10 w-80 focus:outline-none flex-wrap"
          />
        </div>
        {/* icons */}
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
