

import React, { lazy, useEffect, useState } from "react";
import RestroCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("useEffect is called");
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9209632&lng=75.8413089&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();

      const finalData =
        json?.data?.cards?.find(
          (card) => card.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setListOfRestaurants(finalData);
      setFilteredRestaurants(finalData); // Initialize filtered list with all data
      console.log("Data fetched:", finalData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = () => {
    const filteredList = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredList);
  };

  const handleTopRatedFilter = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4.5
    );
    setFilteredRestaurants(filteredList);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="btn" onClick={handleSearch}>
            Search
          </button>
        </div>
        <button className="filter-btn btn" onClick={handleTopRatedFilter}>
          TOP RATED RESTRO
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
         <Link to={"/restaurants/"+restaurant.info.id }> <RestroCard key={restaurant.info.id} resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
