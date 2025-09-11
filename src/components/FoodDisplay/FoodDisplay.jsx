import React, { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const [showAll, setShowAll] = useState(false);

  // Filter by category
  const filteredFoods =
    category === "All"
      ? food_list
      : food_list.filter((item) => item.category === category);

  // Show only 6 items if not showing all
  const displayedFoods = showAll ? filteredFoods : filteredFoods.slice(0, 8);

  return (
    <div className="mt-[30px]" id="food-display">
      <h2 className="text-[max(2vw,24px)] font-bold">Top dishes near you</h2>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] mt-[30px] gap-[30px]">
        {displayedFoods.map((item, index) => (
          <FoodItem
            key={index}
            id={item._id}
            name={item.name}
            description={item.description}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>

      {/* Show All / Show Less Button */}
      {filteredFoods.length > 8 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-text-primary border border-text-primary text-white rounded-lg shadow-md hover:bg-transparent hover:text-text-primary transition cursor-pointer"
          >
            {showAll ? "Show Less" : "Show All"}
          </button>
        </div>
      )}
    </div>
  );
};

export default FoodDisplay;
