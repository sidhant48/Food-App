import { IMG_CDN_URL } from "../constants";

const RestaurentCard = ({ dataNew }) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + dataNew.cloudinaryImageId} />
      <h2>{dataNew.name}</h2>
      <h3>{dataNew.cuisines.join(", ")}</h3>
      <h3>{dataNew.avgRatingString}</h3>
      <h3>{dataNew.costForTwo}</h3>
      <h4>{dataNew.sla.slaString} minutes</h4>
    </div>
  );
};

export default RestaurentCard;
