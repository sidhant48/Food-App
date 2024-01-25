import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurantCategories = (resId) => {
  const [category, setCategory] = useState(null);

  useEffect(() => {
    getCategories();
  }, []);

  async function getCategories() {
    const data = await fetch(
      FETCH_MENU_URL + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setCategory(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR);
  }

  return category;
};

export default useRestaurantCategories;
