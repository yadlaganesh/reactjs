import RestaurantCard from "./RestaurantCard";
import { burgerKingList } from "../constants";
import { restaurantsList } from "../restaurentsList";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
  const filData = restaurants.filter((res) =>
    res?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filData;
}

const BodyComponent = () => {
  let searchTxt = "KFC";
  let [searchText, setSearchText] = useState(""); // to create local variable
  // Update state variable using Virtual DOMs diff algoright and Re-consiliation
  const [allrestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, [searchText]);

  async function getRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.436582&lng=78.44606379999999&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  if(!allrestaurants) return null;
  return (allrestaurants.length == 0) ?  <Shimmer /> : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search here to find out restaurant..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allrestaurants);
            console.log(data);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="cardslist">
        {
          filteredRestaurants.map((restaurant) => {
            return (
              <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            );
          })
          /* <RestaurantCard {...burgerKing} /> */
        }
        {/* <div class="shimmer"></div> */}
      </div>
    </>
  );
};

export default BodyComponent;
