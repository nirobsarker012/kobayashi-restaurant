import React, { useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";

const LoginPopUp = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Login");
  return (
    <div className="absolute z-[1] w-full h-full bg-[#00000090] grid">
      <form className="place-self-center w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-6 py-[25px] px-[30px] rounded-[8px] text-[14px]">
        <div className="flex justify-between items-center text-black">
          <h2 className="text-2xl font-semibold">{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
            className="cursor-pointer w-[16px]"
          />
        </div>
        {/* Login Pop up input */}
        <div className="flex flex-col gap-4">
          {currentState === "Login" ? null : (
            <input
              className="outline-none border border-[#c9c9c9] p-[10px] rounded-[4px]"
              type="text"
              placeholder="Your name"
              required
            />
          )}

          <input
            className="outline-none border border-[#c9c9c9] p-[10px] rounded-[4px]"
            type="email"
            placeholder="Your email"
            required
          />
          <input
            className="outline-none border border-[#c9c9c9] p-[10px] rounded-[4px]"
            type="password"
            placeholder="Your password"
            required
          />
        </div>
        <button className="cursor-pointer border-none p-[10px] rounded-[4px] text-white bg-text-primary text-[15px]">
          {currentState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        {/* Login Pop up Condition */}
        <div className="flex items-start gap-2 -mt-[15px]">
          <input type="checkbox" required className="mt-[5px]" />
          <p className="">
            By continuing, I agree to the terms of use & privacy policy.
          </p>
        </div>
        {currentState === "Login" ? (
          <p className="">
            Create a new account?{" "}
            <span
              className="cursor-pointer text-text-primary font-medium"
              onClick={() => setCurrentState("Sign Up")}
            >
              Click Here
            </span>
          </p>
        ) : (
          <p className="">
            Already have an account ?{" "}
            <span
              className="cursor-pointer text-text-primary font-medium"
              onClick={() => setCurrentState("Login")}
            >
              Login Here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
