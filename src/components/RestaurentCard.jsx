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
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRatingString}</h3>
      <h3>{costForTwo}</h3>
      <h4>{sla.slaString} minutes</h4>
    </div>
  );
};

export default RestaurentCard;
