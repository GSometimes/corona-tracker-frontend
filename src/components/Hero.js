import React from "react";
import Search from "./Search";

const Hero = ({ data, setFilteredData }) => {
  return (
    // <div className="w-full h-screen flex flex-col items-center justify-center font-mono font-bold">
    //   <div className=" flex flex-col items-center justify-center w-5/6 h-5/6 rounded bg-blue-dark shadow:md px-10">
    //     <h1 className="text-4xl md:text-5xl lg:text-7xl text-yellow-light m-5 text-center">
    //       Coronavirus Tracker
    //     </h1>
    //     <p className="text-sm md:text-base lg:text-lg text-yellow-light text-center">
    //       This application lists the current number of cases reported across the
    //       globe and the total updates daily.
    //     </p>

    //     <div className="mt-10">
    //       <Search data={data} setFilteredData={setFilteredData} />
    //     </div>
    //   </div>
    // </div>
    <div className="h-screen w-full flex">
      <div className=" w-full background-image flex justify-end items-center font-bold">
        <h1 className="text-4xl text-yellow-light md:text-5xl lg:text-7xl m-20 text-center">
          Coronavirus Tracker
        </h1>
      </div>
    </div>
  );
};

export default Hero;
