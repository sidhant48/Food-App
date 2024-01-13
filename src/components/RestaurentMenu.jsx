import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurentMenu = () => {
  const { resId } = useParams(); //to read a dynamic url params
  // console.log("resID", resId);

  const [restaurentMenu, setRestaurentMenu] = useState(null);
  // const [menu, seTMenu] = useState([]);

  useEffect(() => {
    getRestaurentMenu();
  }, []);

  async function getRestaurentMenu() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=15.8301396&lng=74.5203579&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    // console.log("Restaurents", json);
    // console.log("res details", json?.data?.cards[0]?.card?.card?.info);
    setRestaurentMenu(json?.data?.cards[0]?.card?.card?.info);
    // seTMenu(
    //   json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
    //     ?.card?.categories[0]?.itemCards
    // );
  }

  return !restaurentMenu ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurent ID: {resId}</h1>
        <h2>{restaurentMenu.name}</h2>
        <img src={IMG_CDN_URL + restaurentMenu.cloudinaryImageId} />
        <h2>{restaurentMenu.locality}</h2>
        <h2>{restaurentMenu.city}</h2>
        <h2>{restaurentMenu.avgRatingString} ⭐</h2>
        <h2>{restaurentMenu.costForTwoMessage}</h2>
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
      <div>
        <h2>Other Details:</h2>
        <h3 className="address">Address:{restaurentMenu.labels[1].message}</h3>
        <h2>Cuisines:{restaurentMenu.labels[2].message}</h2>
        <h3>
          Cuisines type:{restaurentMenu.veg ? "Vegetarian" : "Veg/Non-Veg"}
        </h3>
        <h3>
          Max Delivery time : {restaurentMenu.sla.maxDeliveryTime} minutes
        </h3>
      </div>
    </div>
  );
};

export default RestaurentMenu;
