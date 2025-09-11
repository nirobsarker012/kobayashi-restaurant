import React from "react";
import { menu_list } from "../../assets/frontend_assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-[#262626] font-bol text-4xl">Explore our menu</h1>
      <p className="max-w-[60%] text-[#808080]">
        Choose form a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate youe dining experience.
        One delicious meal at a time.
      </p>
      <div className="flex justify-between items-center gap-[30px] text-center my-[20px] overflow-x-scroll">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list"
            >
              <img
                src={item.menu_image}
                alt={item.menu_name}
                className={`${
                  category === item.menu_name ? "activeExploreItem" : ""
                } w-[7.5vw] min-w-[80px] cursor-pointer rounded-[50%] transition-[0.2s]`}
              />
              <p className="mt-[10px] text-[#747474] text-[max(1.4vw, 16px)] cursor-pointer">
                {item.menu_name}
              </p>
            </div>
          );
        })}
        <hr className="my-[10px] h-[2px] bg-[#e2e2e2] border-none" />
      </div>
    </div>
  );
};

export default ExploreMenu;
