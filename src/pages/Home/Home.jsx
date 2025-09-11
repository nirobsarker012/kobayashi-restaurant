import React, { useState } from "react";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import Service from "../../components/Service/Service";
// import Testmonial from "../../components/Tesmonial/Testmonial";

const Home = () => {
  const [category, setCategory] = useState("All");
  console.log(category);
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      {/* <div className="overflow-x-hidden">
        <Testmonial />
      </div> */}
      <Service />
    </div>
  );
};

export default Home;
