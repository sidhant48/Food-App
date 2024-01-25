import { IMG_CDN_URL } from "../constants";

const RestaurentCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRatingString,
  costForTwo,
  sla,
}) => {
  return (
    <div className="w-[200px] p-2 m-2 shadow-lg bg-gray-100">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h3>{avgRatingString}</h3>
      <h3>{costForTwo}</h3>
      <h4>{sla?.slaString} minutes</h4>
    </div>
  );
};

export const withPromotedCard = (RestaurentCard) => {
  return ({ resData }) => {
    return (
      <div>
        <label className="absolute bg-green-500 text-white m-1 p-1 rounded">
          Pure Veg
        </label>
        <RestaurentCard {...resData} />
      </div>
    );
  };
};

export default RestaurentCard;
