import React, { useContext, useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <nav className="py-[20px] flex justify-between items-center">
      <Link to={"/"}>
        <img src={assets.logo} alt="logo" className="w-[120px] lg:w-[150px]" />
      </Link>
      <ul className="lg:flex gap-[20px] text-items text-[18px] hidden">
        <Link
          to={"/"}
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("Mobile-app")}
          className={menu === "Mobile-app" ? "active" : ""}
        >
          Mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("Contact US")}
          className={menu === "Contact US" ? "active" : ""}
        >
          Contact US
        </a>
      </ul>
      <div className="flex items-center gap-[20px] lg:gap-[40px]">
        <img src={assets.search_icon} alt="" />
        <div className="relative">
          <Link to={"/cart"}>
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div
            className={
              getTotalCartAmount() === 0
                ? ""
                : "absolute min-w-[10px] min-h-[10px] bg-[#e84118] -top-2 -right-2 rounded-[5px]"
            }
          ></div>
        </div>
        <button
          onClick={() => setShowLogin(true)}
          className="bg-transparent text-[16px] py-[7px] px-[20px]  text-items border border-t-amber-700 lg:py-[10px] lg:px-[30px] cursor-pointer rounded-[50px] hover:bg-[#fff4f2] transition-all duration-300"
        >
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
