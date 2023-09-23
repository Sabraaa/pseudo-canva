import React from "react";
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
  return (
    // CONTAINER
    <div className="fixed left-0">
      <div className="aside-profile flex">
        <img
          src={Profile}
          alt="avatar"
          className="cursor-pointer rounded-full w-10 h-10"
        />
        <div className="pl-6">
          <h3> Personal</h3>
          <p> free. 1</p>
        </div>
      </div>
      <button type="button"> Try Canva Pro </button>
      <div>
        <RiArrowLeftDownLine />
        <p> Back to Home</p>
      </div>
      <div>
        <RiGridLine />
        <p>All templates</p>
      </div>
      <div>
        <RiPictureInPicture2Line />
        <p>Photos</p>
      </div>
      <div>
        <RiShape2Line />
        <p>Icons</p>
      </div>
      <div />
      <h5> Your Content </h5>
      <div>
        <RiHeart3Line />
        <p> Creators You Follow</p>
      </div>
      <div>
        <RiPriceTag2Line />/<p>Brand Templates</p>
      </div>
      <div>
        <RiStarLine />
        <p>Starred</p>
      </div>

      <div>
        <RiTeamLine />
        <p>Create a team</p>
      </div>
      <div />
      <div>
        <RiRecycleLine />
        <p>Trash</p>
      </div>
    </div>
  );
};

export default Aside;
