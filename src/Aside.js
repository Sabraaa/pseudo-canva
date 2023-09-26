import React, { useEffect, useState } from "react";
import Profile from "../src/assets/avatar.jpeg";
import {
  RiArrowLeftDownLine,
  RiGridLine,
  RiShape2Line,
  RiHeart3Line,
  RiPriceTag2Line,
  RiStarLine,
  RiPictureInPicture2Line,
  RiTeamLine,
  RiRecycleLine,
} from "react-icons/ri";

const Aside = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const breakpoint = 1200;

  return (
    <div>
      {windowWidth > breakpoint ? (
        <div className="md">
          {/* CONTAINER */}
          {/* PROFILE */}
          <div className="flex p-3">
            <img
              src={Profile}
              alt="avatar"
              className="cursor-pointer rounded-full w-10 h-10 "
            />
            <div className="pl-6">
              <h3 className="font-semibold"> Personal</h3>
              <p className="text-sm"> free. 1</p>
            </div>
          </div>
          {/* BUTTON */}
          <button
            className="w-44 h-10 rounded text-sm  px-3 bg-slate-200 m-4"
            type="button"
          >
            Try Canva Pro
          </button>
          {/* OPTIONS */}
          <div className="flex h-full justify-between flex-col">
            {/* TOP OPTIONS*/}
            <div className="flex flex-col ">
              <div className="flex items-center p-4  hover:bg-slate-200 rounded">
                <RiArrowLeftDownLine
                  size={22}
                  className="flex justify-center mx-1"
                />
                <p> Back to Home</p>
              </div>
              <div className="flex items-center p-4  hover:bg-slate-200 rounded">
                <RiGridLine size={22} className="flex justify-center mx-1" />
                <p>All templates</p>
              </div>
              <div className="flex items-center p-4  hover:bg-slate-200 rounded">
                <RiPictureInPicture2Line
                  size={22}
                  className="flex justify-center mx-2"
                />
                <p>Photos</p>
              </div>
              <div className="flex items-center p-4  hover:bg-slate-200 rounded">
                <RiShape2Line size={22} className="flex justify-center mx-2" />
                <p>Icons</p>
              </div>
              <div />
              <h5 className="text-sm p-4 pl-2"> Your Content </h5>
              <div className="flex items-center p-4  hover:bg-slate-200 rounded">
                <RiHeart3Line size={22} className="flex justify-center mx-2" />
                <p> Creators You Follow</p>
              </div>
              <div className="flex items-center p-4  hover:bg-slate-200 rounded">
                <RiPriceTag2Line
                  size={22}
                  className="flex justify-center mx-2"
                />
                <p>Brand Templates</p>
              </div>
              <div className="flex items-center p-4  hover:bg-slate-200 rounded">
                <RiStarLine size={22} className="flex justify-center mx-2" />
                <p>Starred</p>
              </div>
            </div>
            {/* BOTTOM OPTIONS*/}
            <div className="flex flex-col ">
              <div className="flex items-center p-4  hover:bg-slate-200 rounded ">
                <RiTeamLine size={22} className="flex justify-center mx-2" />
                <p>Create a team</p>
              </div>
              <div className=" border-2" />
              <div className="flex items-center p-4  hover:bg-slate-200 rounded">
                <RiRecycleLine size={22} className="flex justify-center mx-2" />
                <p>Trash</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Aside;
