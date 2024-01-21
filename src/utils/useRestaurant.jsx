import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurent] = useState(null);

  useEffect(() => {
    getRestaurentMenu();
  }, []);

  async function getRestaurentMenu() {
    const data = await fetch(
      FETCH_MENU_URL + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setRestaurent(json?.data?.cards[0]?.card?.card?.info);
  }

  return restaurant;
};

export default useRestaurant;
