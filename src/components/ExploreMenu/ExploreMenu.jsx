import React from "react";
import { menu_list } from "../../assets/frontend_assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col gap-5 px-4 sm:px-6 lg:px-12">
      <h1 className="text-[#262626] font-bold text-2xl sm:text-3xl xl:text-4xl">
        Explore our menu
      </h1>

      <p className="text-[#808080] text-sm sm:text-base md:text-lg max-w-full md:max-w-[80%] lg:max-w-[60%]">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience —
        one delicious meal at a time.
      </p>

      {/* Scrollable menu */}
      <div className="flex items-center gap-5 sm:gap-8 md:gap-10 text-center my-5 overflow-x-auto scrollbar-hide">
        {menu_list.map((item, index) => (
          <div
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
            key={index}
            className="flex flex-col items-center min-w-[80px] sm:min-w-[100px] md:min-w-[120px]"
          >
            <img
              src={item.menu_image}
              alt={item.menu_name}
              className={`${
                category === item.menu_name ? "activeExploreItem" : ""
              } w-[60px] sm:w-[80px] md:w-[100px] lg:w-[7.5vw] cursor-pointer rounded-full transition duration-200`}
            />
            <p className="mt-2 text-[#747474] text-sm sm:text-base md:text-lg cursor-pointer">
              {item.menu_name}
            </p>
          </div>
        ))}
      </div>

      <hr className="my-4 h-[2px] bg-[#e2e2e2] border-none" />
    </div>
  );
};

export default ExploreMenu;
