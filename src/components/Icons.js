import React from "react";
import Stars from "../assets/star-shine-svgrepo-com.svg";

const Icons = ({ title }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center m-4">
        <img
          src={Stars}
          alt="stars"
          className=" w-10 bg-white rounded-full p-1 mx-10 hover:bg-slate-800"
        />
        <div className="text-sm text-white whitespace-nowrap pt-2">{title}</div>
      </div>
    </div>
  );
};

export default Icons;
