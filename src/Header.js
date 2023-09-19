import React from "react";
import Logo from "../src/assets/logo.svg";
import Profile from "../src/assets/avatar.jpeg";
import {
  RiMenuFill,
  RiArrowDropDownLine,
  RiCloseLine,
  RiComputerLine,
  RiSettings2Line,
  RiNotification2Line,
} from "react-icons/ri";

const Header = () => {
  return (
    <div>
      <div className="header-container flex justify-between w-full border-b-2">
        {/* left side of header */}
        <div className="header-left-side flex justify-start p-6 items-center">
          <RiMenuFill color="000" size={25} className="cursor-pointer" />
          <img className="px-6 cursor-pointer" srs={Logo} alt="logo" />
          {/* the dropdowns */}
          <div className="dropdown-container flex px-5 cursor-pointer">
            <p className="pl-5 ">Design spotlight</p>
            <RiArrowDropDownLine color="000" size={25} />
            <p className="pl-5">Business</p>
            <RiArrowDropDownLine color="000" size={25} />
            <p className="pl-5">Education</p>
            <RiArrowDropDownLine color="000" size={25} />
            <p className="pl-5">Plans and pricing</p>
            <RiArrowDropDownLine color="000" size={25} />
            <p className="pl-5">Learn</p>
            <RiArrowDropDownLine color="000" size={25} />
          </div>
        </div>

        {/* the right side of header */}
        <div className="header-right-side flex justify-end p-6 items-center">
          <div className="icons flex ">
            <RiComputerLine
              className="cursor-pointer mr-3"
              color="000"
              size={25}
            />
            <RiSettings2Line
              className="cursor-pointer mr-3"
              color="000"
              size={25}
            />
            <RiNotification2Line
              className="cursor-pointer mr-3"
              color="000"
              size={25}
            />
          </div>
          <button className="w-24 h-9 rounded text-sm px-3" type="button">
            Create a design
          </button>
          <img
            className="  rounded-full w-10 h-10"
            src={Profile}
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
