import React, { useContext } from "react";
import { StoreContext } from "../../components/context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div>
      <form className="flex items-start justify-between gap-[50px] mt-[100px]">
        {/* Place Order Left */}
        <div className="w-full max-w-[max(30%,500px)]">
          <p className="text-[30px] font-semibold mb-[50px]">
            Delivery Information
          </p>
          <div className="flex gap-[10px]">
            <input
              type="text"
              placeholder="First Name"
              className="w-full mb-[15px] p-[10px] rounded-[4px] border border-[#c5c5c5] outline-text-primary"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full mb-[15px] p-[10px] rounded-[4px] border border-[#c5c5c5] outline-text-primary"
            />
          </div>
          {/*  */}
          <input
            type="email"
            placeholder="Email Adsress"
            className="w-full mb-[15px] p-[10px] rounded-[4px] border border-[#c5c5c5] outline-text-primary"
          />
          <input
            type="text"
            placeholder="Street"
            className="w-full mb-[15px] p-[10px] rounded-[4px] border border-[#c5c5c5] outline-text-primary"
          />
          {/*  */}
          <div className="flex gap-[10px]">
            <input
              type="text"
              placeholder="City"
              className="w-full mb-[15px] p-[10px] rounded-[4px] border border-[#c5c5c5] outline-text-primary"
            />
            <input
              type="text"
              placeholder="State"
              className="w-full mb-[15px] p-[10px] rounded-[4px] border border-[#c5c5c5] outline-text-primary"
            />
          </div>
          {/*  */}
          <div className="flex gap-[10px]">
            <input
              type="text"
              placeholder="Zip Code"
              className="w-full mb-[15px] p-[10px] rounded-[4px] border border-[#c5c5c5] outline-text-primary"
            />
            <input
              type="text"
              placeholder="Country"
              className="w-full mb-[15px] p-[10px] rounded-[4px] border border-[#c5c5c5] outline-text-primary"
            />
          </div>
          {/*  */}
          <input
            type="text"
            placeholder="Phone"
            className="w-full mb-[15px] p-[10px] rounded-[4px] border border-[#c5c5c5] outline-text-primary"
          />
        </div>
        {/* Place order right */}
        <div className="w-full max-w-[max(40%,500px)]">
          <div className="flex-1 flex flex-col gap-5">
            <h2 className="text-lg sm:text-xl font-semibold">Cart Total</h2>
            <div className="space-y-2">
              <div className="flex justify-between text-[#555] text-sm sm:text-base">
                <p>SubTotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr className="my-[8px]" />
              <div className="flex justify-between text-[#555] text-sm sm:text-base">
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>
              <hr className="my-[8px]" />
              <div className="flex justify-between text-[#555] text-sm sm:text-base font-semibold">
                <p>Total</p>
                <b>
                  ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
                </b>
              </div>
            </div>
            {/* Checkout btn */}
            <button className="border-none text-white bg-text-primary w-full sm:w-[200px] py-3 rounded cursor-pointer uppercase mt-[20px]">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
