import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center font-mono font-bold">
      <h1 className="text-7xl text-gray-700 m-5">Coronavirus Tracker</h1>
      <p className="text-base text-gray-700">
        This application lists the current number of cases reported across the
        globe.
      </p>
    </div>
  );
};

export default Hero;
