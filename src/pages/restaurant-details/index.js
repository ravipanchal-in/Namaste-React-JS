import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurant from "../../hooks/useRestaurant";

const RestaurantDetails = () => {
  const { resId } = useParams();

  const restaurantDtl = useRestaurant(resId);

  if (!restaurantDtl) return <h1>Loading... please wait</h1>;
  return (
    <div>
      RestaurantDetails : {resId}{" "}
      {restaurantDtl?.data?.cards[0]?.card?.card?.info?.name}
      {Object.values(
        restaurantDtl?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      ).map((item, index) => {
        return <h1 key={index}>aaaa</h1>;
      })}
    </div>
  );
};

export default RestaurantDetails;
