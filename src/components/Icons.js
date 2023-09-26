import React from "react";
import Stars from "../assets/star-shine-svgrepo-com.svg";

const Icons = ({ title }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center m-4">
        <img
          src={Stars}
          alt="stars"
          className=" w-10 bg-white rounded-full p-1 mx-10 hover:bg-slate-500 hover:scale-125 transition delay-150 duration-300 ease-in-out "
        />
        <div className="text-sm text-white whitespace-nowrap pt-2">{title}</div>
      </div>
    </div>
  );
};

export default Icons;
