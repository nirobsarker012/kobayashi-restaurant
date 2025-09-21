import React from "react";

const Header = () => {
  return (
    <div className="h-[34vw] m-[30px] mx-auto bg-[url('/header_img.png')] bg-no-repeat bg-contain relative">
      <div className="absolute flex flex-col items-start gap-[1.5vw] lg:max-w-[55%] xl:max-w-[50%] bottom-[10%] left-[6vw]">
        <h2 className="font-bold text-white text-[max(4.5vw,22px)]">
          Order your favourite for here
        </h2>
        <p className="text-white text-[1vw]">
          Choose form a diverse menu featuring a delectable array of dishes
          crafted with the fantastisfy your cravings and elevate your dining
          experience, on deleicious meal at a time.
        </p>
        <button className="border text-[#747474] font-bold py-[1vw] px-[2.3vw] bg-white text-[max(1vw,13px)] rounded-[50px] cursor-pointer">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
