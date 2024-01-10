import { useEffect, useState } from "react";
import { restaurantList } from "../constants";
import RestaurentCard from "./RestaurentCard";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);

  function filterData(searchText, restaurants) {
    const filteredData = restaurants.filter((restaurent) => {
      return restaurent.data.name.includes(searchText);
    });
    return filteredData;
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=15.8496953&lng=74.4976741&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      "json data names",
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setAllRestaurants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
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
            const data = filterData(searchText, allRestaurants);
            setAllRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {allRestaurants.map((restaurent) => {
          return (
            <RestaurentCard
              dataNew={restaurent.info}
              key={restaurent.info.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Body;
