import React, { useState, useEffect } from "react";
import "./main.css";
import restrautList from "../../constants/RestaurantsList";
import RestaurantCard from "../card/RestaurantCard";

const filterData = (searchText, restaurants) => {
  return restaurants.filter((item) =>
    item.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
};

const Main = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  async function fetchRestaurants() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  // console.log("searchText----", searchText);
  // console.log("allRestaurants----", allRestaurants);
  // console.log("filteredRestaurants----", filteredRestaurants);

  //* Early Return
  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <div>Loading</div>
  ) : (
    <main className="container">
      <div className="row">
        <div className="search-view">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            type="text"
            placeholder="Search here..."
          />
          <button
            onClick={() => {
              const data = filterData(searchText, allRestaurants);
              setFilteredRestaurants(data);
            }}
          >
            Search
          </button>
        </div>
        <div className="main">
          {filteredRestaurants.length === 0 ? (
            <h2>No restaurant match your filter!!</h2>
          ) : (
            filteredRestaurants?.map((item) => (
              <RestaurantCard key={item.data.id} {...item.data} />
            ))
          )}
        </div>
      </div>
    </main>
  );
};

export default Main;
