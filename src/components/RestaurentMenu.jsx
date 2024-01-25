import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurentMenu = () => {
  const { resId } = useParams(); //to read a dynamic url params
  // console.log("resID", resId);

  const restaurant = useRestaurant(resId);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <div>
        <h1>Restaurent ID: {resId}</h1>
        <h2 className="font-bold my-6 text-2xl">{restaurant.name}</h2>
        {/* <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h2>{restaurant.locality}</h2>
        <h2>{restaurant.city}</h2>
        <h2>{restaurant.avgRatingString} ⭐</h2> */}
        <p className="font-bold text-lg">
          Cuisines:{restaurant.labels[2].message} -{" "}
          {restaurant.costForTwoMessage}
        </p>
        {/* categories accordions*/}
      </div>
      {/* <div>
        <h1>Menu </h1>
        <div>
          <ul>
            {Object.values(
              menu.map((obj) => (
                <li key={obj.card.info.name}>{obj.card.info.name}</li>
              ))
            )}
            {console.log("mmmmmmm", menu)}
          </ul>
        </div>
      </div> */}
      {/* <div>
        <h2>Other Details:</h2>
        <h3 className="text-wrap">Address:{restaurant.labels[1].message}</h3>
        <h2>Cuisines:{restaurant.labels[2].message}</h2>
        <h3>Cuisines type:{restaurant.veg ? "Vegetarian" : "Veg/Non-Veg"}</h3>
        <h3>Max Delivery time : {restaurant.sla.maxDeliveryTime} minutes</h3>
      </div> */}
    </div>
  );
};

export default RestaurentMenu;
