
import React from "react";
import { CDN_URL } from "../utils/constants";

const RestroCard = (props) => {
  const { resData } = props;
  const {
    name = "Unknown Restaurant",
    cuisines = [],
    costForTwo = "Cost information not available",
    deliveryTime = "N/A",
    avgRating = "No Rating",
    cloudinaryImageId = ""
  } = resData?.info || {};

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt={`${name} Logo`}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>
        {avgRating} stars
      </h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestroCard;
