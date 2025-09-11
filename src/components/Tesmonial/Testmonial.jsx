import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { FaStar } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import clientData from "../../data/clientData";

const Testmonial = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-indigo-600 font-semibold uppercase">Testimonials</p>
        <h2 className="text-3xl font-bold mb-2">What our clients say</h2>
        <p className="text-gray-600 mb-8">
          Create a visual identity for your company, and an overall brand
        </p>

        <Swiper
          modules={[Navigation]}
          slidesPerView={4}
          spaceBetween={24}
          navigation
          loop={false}
        >
          {clientData.map((client, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative bg-gray-100 shadow-md px-6 pb-6 pt-12 text-center">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-12 h-12 rounded-full border-2 border-indigo-600"
                  />
                </div>
                <h3 className="font-bold">{client.name}</h3>
                <span className="text-gray-500">{client.role}</span>
                <div className="flex justify-center my-2 text-yellow-500">
                  {Array(client.rating)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar key={i} />
                    ))}
                </div>
                <p className="text-gray-600 text-sm">{client.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testmonial;
