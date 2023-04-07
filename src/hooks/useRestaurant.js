import { useEffect, useState } from "react";
import { Restaurant_Details_URL } from "../constants";
const useRestaurant = (resId) => {
  const [restaurantDtl, setRestaurantDtl] = useState(null);

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  const getRestaurantDetails = async () => {
    const response = await fetch(Restaurant_Details_URL + resId);
    const jsonData = await response.json();
    setRestaurantDtl(jsonData);
  };

  return restaurantDtl;
};

export default useRestaurant;
