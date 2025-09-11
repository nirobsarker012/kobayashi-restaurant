import React, { use } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = use(StoreContext);
  return (
    <div className="w-full mx-auto rounded-[15px] shadow-lg">
      <div className="overflow-hidden rotate-[15px] relative">
        <img
          src={image}
          alt=""
          className="w-full rounded-[15px] transform transition-transform duration-300 hover:scale-107"
        />
        {!cartItems[id] ? (
          <img
            className="w-[35px] absolute bottom-[15px] right-[15px] rounded-[50%] cursor-pointer"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="absolute bottom-[15px] right-[15px] flex items-center gap-[10px] rounded-[50%] bg-white">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
              className="w-[30px] cursor-pointer"
            />
            <p>{cartItems[id]}</p>
            <img
              className="w-[30px] cursor-pointer"
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
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
