import React from "react";
import Search from "./Search";

const Hero = () => {
  return (
    <div className="w-full h-96 flex flex-col items-center justify-center font-mono font-bold">
      <div className=" flex flex-col items-center justify-center w-5/6 h-5/6 rounded bg-gray-light shadow:md">
        <h1 className="text-4xl md:text-5xl lg:text-8xl text-blue-dark m-5 text-center">
          Coronavirus Tracker
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-blue-dark text-center">
          This application lists the current number of cases reported across the
          globe.
        </p>
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
