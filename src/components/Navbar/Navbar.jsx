import React, { useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  return (
    <div className="py-[20px] flex justify-between items-center">
      <img src={assets.logo} alt="logo" className="w-[150px]" />
      <ul className="flex gap-[20px] text-items text-[18px]">
        <li className={menu === "Home" ? "active:" : ""}>Home</li>
        <li className={menu === "Menu" ? "active:" : ""}>Menu</li>
        <li className={menu === "Mobile-app" ? "active:" : ""}>Mobile-app</li>
        <li className={menu === "Contact US" ? "active:" : ""}>Contact US</li>
      </ul>
      <div className="flex items-center gap-[40px]">
        <img src={assets.search_icon} alt="" />
        <div className="">
          <img src={assets.basket_icon} alt="" />
          <div className=""></div>
        </div>
        <button className="bg-transparent text-[16px] text-items border border-t-amber-700 py-[10px] px-[30px] cursor-pointer rounded-[50px] hover:bg-[#fff4f2] transition-all duration-300">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
