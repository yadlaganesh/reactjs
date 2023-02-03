const RestaurantCard = ({ cloudinaryImageId, name, cuisines, rating }) => {
  return (
    <div className="clearfix">
      <div className="card">
        <img
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
          alt="card"
        />
        <h2>{name}</h2>
        <h3>{cuisines.join(",")}</h3>
        <h4>{rating} Star</h4>
      </div>
    </div>
  );
};
export default RestaurantCard;
