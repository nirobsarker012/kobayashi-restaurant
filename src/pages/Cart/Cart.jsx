import React, { useContext } from "react";
import { StoreContext } from "../../components/context/StoreContext";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  // Check if the cart has any items
  const hasItems = food_list.some((item) => cartItems[item._id] > 0);

  return (
    <div className="mt-[80px] sm:mt-[100px] px-3 sm:px-6 lg:px-12">
      {hasItems ? (
        <>
          {/* Header - hidden on mobile */}
          <div className="hidden sm:grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-500 text-xs sm:text-sm md:text-base font-semibold border-b border-gray-300 pb-2">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>

          {/* Cart Items */}
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div
                  key={index}
                  className="grid grid-cols-2 sm:grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-700 text-sm sm:text-base gap-2 border-b border-gray-200 py-3"
                >
                  {/* Item image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[50px] h-[50px] object-cover rounded"
                  />

                  {/* Title (always next to image on mobile) */}
                  <p className="font-medium">{item.name}</p>

                  {/* Price */}
                  <p className="sm:block hidden">${item.price.toFixed(2)}</p>

                  {/* Quantity */}
                  <p className="sm:block hidden">{cartItems[item._id]}</p>

                  {/* Total */}
                  <p className="sm:block hidden">
                    ${(item.price * cartItems[item._id]).toFixed(2)}
                  </p>

                  {/* Remove button */}
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="text-red-500 font-bold hover:text-red-700 cursor-pointer justify-self-end sm:justify-self-auto"
                  >
                    ✕
                  </button>
                </div>
              );
            }
            return null;
          })}

          {/* Cart Bottom */}
          <div className="mt-10 lg:mt-20 flex flex-col-reverse lg:flex-row justify-between gap-10 lg:gap-[max(12vw,20px)]">
            {/* Cart Total */}
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
                  <p>${2}</p>
                </div>
                <hr className="my-[8px]" />
                <div className="flex justify-between text-[#555] text-sm sm:text-base font-semibold">
                  <p>Total</p>
                  <p>${getTotalCartAmount() + 2}</p>
                </div>
              </div>
              {/* Checkout btn */}
              <button className="border-none text-white bg-text-primary w-full sm:w-[200px] py-3 rounded cursor-pointer">
                Proceed to checkout
              </button>
            </div>

            {/* Promo Code */}
            <div className="flex-1">
              <p className="text-[#555] text-sm sm:text-base">
                If you have a promo code, enter it here
              </p>
              <div className="mt-3 flex flex-col sm:flex-row justify-between items-center bg-[#eaeaea] rounded">
                <input
                  type="text"
                  placeholder="Promo code"
                  className="bg-transparent border-none outline-none p-2 flex-1"
                />
                <button className="mt-2 sm:mt-0 sm:ml-2 border-none text-white w-full sm:w-[150px] bg-black rounded py-2 cursor-pointer">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        // Fallback message
        <div className="text-center text-gray-500 text-lg font-medium py-10">
          No items found in your cart 🛒
        </div>
      )}
    </div>
  );
};

export default Cart;
