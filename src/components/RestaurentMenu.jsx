import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import useRestaurantCategories from "../utils/useRestaurantCategories";
import RestaurantCategory from "./RestaurantCategory";

const RestaurentMenu = () => {
  const { resId } = useParams(); //to read a dynamic url params
  // console.log("resID", resId);

  const [showIndex, setShowIndex] = useState(null);

  const restaurant = useRestaurant(resId);
  const categories = useRestaurantCategories(resId);

  const allCategories = categories?.cards
    .slice(1)
    ?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log("All cateories", allCategories);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="text-center bg-red-100">
      <div>
        <h1>Restaurent ID: {resId}</h1>
        <h2 className="font-bold my-6 text-2xl">{restaurant.name}</h2>
        <p className="font-bold text-lg">
          Cuisines:{restaurant?.labels[2]?.message} -{" "}
          {restaurant?.costForTwoMessage}
        </p>
        {/* categories accordions*/}
        {allCategories?.map((category, index) => (
          //controlled componenet
          <RestaurantCategory
            data={category?.card?.card}
            key={category?.card?.card?.title}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurentMenu;
