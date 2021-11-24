import React from "react";
import Search from "./Search";

const Hero = ({ data, setFilteredData }) => {
  return (
    <div className="w-full h-96 flex flex-col items-center justify-center font-mono font-bold">
      <div className=" flex flex-col items-center justify-center w-5/6 h-5/6 rounded bg-blue-dark shadow:md px-10">
        <h1 className="text-4xl md:text-5xl lg:text-7xl text-yellow-light m-5 text-center">
          Coronavirus Tracker
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-yellow-light text-center">
          This application lists the current number of cases reported across the
          globe and the total updates daily.
        </p>

        <div className="mt-10">
          <Search data={data} setFilteredData={setFilteredData} />
        </div>
      </div>
      {/* <div className="absolute bottom-20 h-36 flex flex-col justify-evenly items-center mt-5">
        <p className="text-sm md:text-base text-gray-700">Scroll to View Data</p>
        <img
          src="https://img.icons8.com/ios/75/000000/long-arrow-down.png"
          alt=""
        />
      </div> */}
    </div>
  );
};

export default Hero;
