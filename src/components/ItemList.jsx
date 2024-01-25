import React from "react";
import { IMG_CDN_URL } from "../constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span>
                - ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <img
              src={IMG_CDN_URL + item?.card?.info?.imageId}
              className="w-full"
              alt="Image"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
