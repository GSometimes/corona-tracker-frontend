import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-80 flex flex-col items-center justify-center font-mono font-bold">
        <h1 className="text-4xl md:text-5xl lg:text-8xl text-gray-700 m-5 text-center">Coronavirus Tracker</h1>
        <p className="text-sm md:text-base lg:text-lg text-gray-700 text-center">
          This application lists the current number of cases reported across the globe.
        </p>

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
