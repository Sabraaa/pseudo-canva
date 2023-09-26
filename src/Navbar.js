import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import Icons from "./components/Icons";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center">
      {/* GRADIENT BOX */}
      <div
        className="bg-gradient-to-r from-emerald-300 from-10% via-sky-300 via-30% to-indigo-400 to-90% 
      rounded-md  m-4 flex flex-col justify-around items-center w-full h-64 px-52 py-40
"
      >
        <h1 className=" text-white text-4xl font-semibold whitespace-nowrap">
          What will you design today?
        </h1>
        {/* input */}
        <div className="w-4/5 flex border items-center rounded-md hover:border-stone-400 focus:border-blue-300  my-10">
          <RiSearch2Line
            color="000"
            size={40}
            className="flex items-center justify-between bg-white px-2 rounded-l-md"
          />
          <input
            type="text"
            placeholder="search your content"
            className="h-10 w-full focus:outline-none flex-wrap"
          />
        </div>
        {/* icons */}
        <div className="flex flex-row items-center justify-around">
          <Icons title="For you" />
          <Icons title="Docs" />
          <Icons title="Whiteboards" />
          <Icons title="presentations" />
          <Icons title="Social media" />
          <Icons title="Videos" />
          <Icons title="Websites" />
          <Icons title="More" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
