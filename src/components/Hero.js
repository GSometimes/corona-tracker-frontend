import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center font-mono font-bold">
      <h1 className="text-7xl text-gray-700 m-5">Coronavirus Tracker</h1>
      <p className="text-base text-gray-700">
        This application lists the current number of cases reported across the
        globe.
      </p>
      <img src="https://img.icons8.com/ios/100/000000/long-arrow-down.png" alt=""/>
    </div>
  );
};

export default Hero;
