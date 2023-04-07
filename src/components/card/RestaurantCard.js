import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const RestaurantCard = ({
  name,
  id,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="card">
      <Link to={`restaurant/${id}`}>
        <div className="card-img">
          <img
            src={
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
              cloudinaryImageId
            }
          />
        </div>
        <div className="card-desc">
          <h3>{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h5>Distance : {lastMileTravelString}</h5>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
