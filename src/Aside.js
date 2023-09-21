import React from "react";
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
    <div className="aside-container">
      <div className="aside-profile">
        <img />
        <h3> Personal</h3>
        <p> free. 1</p>
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
