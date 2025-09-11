import React from "react";
import { assets } from "../../assets/frontend_assets/assets";

const FoodItem = ({ id, name, price, description, image }) => {
  return (
    <div className="w-full mx-auto rounded-[15px] shadow-lg">
      <div className="overflow-hidden rotate-[15px]">
        <img
          src={image}
          alt=""
          className="w-full rounded-[15px] transform transition-transform duration-300 hover:scale-107"
        />
      </div>
      <div className="p-4 ">
        <div className="flex justify-between items-center mb-[10px]">
          <p className="text-[20px] font-semibold">{name}</p>
          <img src={assets.rating_starts} alt="" className="w-[70px]" />
        </div>
        <p className="text-[#676767] text-[12px]">{description}</p>
        <p className="text-[22px] my-[10px] text-text-primary font-semibold">
          ${price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
