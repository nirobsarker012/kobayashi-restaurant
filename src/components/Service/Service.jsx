import React from "react";
import img1 from "../../assets/service_icons/clock.svg";
import img2 from "../../assets/service_icons/delivery.svg";
import img3 from "../../assets/service_icons/lucide--leaf.svg";

const Service = () => {
  const serviceData = [
    {
      id: 1,
      icon: img1,
      title: "Online Reservation",
      desc: "Book your table online and skip the wait",
    },
    {
      id: 2,
      icon: img2,
      title: "Quick Delivery",
      desc: "Fast delivery to your doorstep within 30 minutes",
    },
    {
      id: 3,
      icon: img3,
      title: "Organic Ingredients",
      desc: "Fresh, organic ingredients sourced locally",
    },
  ];

  const getBgColor = (title) => {
    if (title === "Online Reservation") return "bg-blue-500";
    if (title === "Quick Delivery") return "bg-green-500";
    return "bg-red-500";
  };

  return (
    <div className="py-10">
      <div className="flex flex-col text-center items-center justify-center my-4">
        <h1 className="font-bold text-4xl lg:text-6xl">Our Services</h1>
        <p className="text-gray-500">
          We proud exceptional services to enhance your dining experiences
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center md:gap-3.5 lg:gap-8">
        {serviceData.map((data) => (
          <div
            key={data.id}
            className="my-10 flex flex-col items-center text-center p-4 hover:transition-transform hover:-translate-y-2.5 duration-300"
          >
            <div
              className={`p-4 rounded-[10px] mb-4 ${getBgColor(data.title)}`}
            >
              <img
                src={data.icon}
                alt={data.title}
                className="w-7 h-7 invert"
              />
            </div>
            <h3 className="font-semibold text-lg">{data.title}</h3>
            <span className="text-gray-500">{data.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
