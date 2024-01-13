import { useEffect, useState } from "react";
import { restaurantList } from "../constants";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  function filterData(searchText, restaurants) {
    const filteredData = restaurants.filter((restaurent) => {
      return restaurent?.info?.name
        ?.toLowerCase()
        ?.includes(searchText.toLowerCase());
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

    // console.log(json);
    // console.log(
    //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    setAllRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  if (!allRestaurants) return null;

  // if (filteredRestaurants?.length === 0) {
  //   return <h1>No Restaurant Match your Filter!!!</h1>;
  // }

  return filteredRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
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
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurent) => {
          return (
            <Link
              to={"/restaurent/" + restaurent.info.id}
              key={restaurent.info.id}
            >
              <RestaurentCard {...restaurent.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
