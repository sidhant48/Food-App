import { useEffect, useState } from "react";
import { restaurantList } from "../constants";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=15.8496953&lng=74.4976741&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setAllRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>🔴Please check your Internet Connection!</h1>;
  }

  if (!allRestaurants) return null;

  // if (filteredRestaurants?.length === 0) {
  //   return <h1>No Restaurant Match your Filter!!!</h1>;
  // }

  return filteredRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-5 bg-pink-50 my-5">
        <input
          className="focus:bg-yellow-50 p-2"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search..."
        />
        <button
          className="p-2 m-2 bg-purple-700 hover:bg-green-400 text-white rounded"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
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
