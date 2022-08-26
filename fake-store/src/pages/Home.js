import React from "react";
import Items from "../components/Items";

const Home = () => {
  return (
    <div className="wrapper flex justify-center">
      <div className="w-[100%] md:w-[80%]">
        <Items />
      </div>
    </div>
  );
};

export default Home;
