import { useState } from "react";
import { restaurantList } from "../constants";
import RestaurentCard from "./RestaurentCard";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);

  function filterData(searchText, restaurants) {
    const filteredData = restaurants.filter((restaurent) => {
      return restaurent.data.name.includes(searchText);
    });
    return filteredData;
  }

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurent) => {
          return (
            <RestaurentCard {...restaurent.data} key={restaurent.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
