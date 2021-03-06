import React from "react";
import Loader from "./Loader";

const Data = ({ data }) => {
  return data.length === 0 ? (
    <Loader />
  ) : (
    <div
      id="search"
      className="flex flex-row flex-wrap justify-center items-center"
    >
      {data.map((currentData, idx) => {
        return (
          <div
            className="flex flex-col justify-evenly items-center mb-2 max-w-sm rounded-lg overflow-hidden shadow-md p-5 h-60 w-full md:h-64 md:w-1/2 lg:h-72 lg:w-3/12 text-center font-mono m-2 bg-black border-4 border-brand"
            key={currentData.country + idx}
          >
            <p className="text-light">{currentData?.state}</p>
            <p className="text-light">{currentData?.country}</p>
            <p className="text-light">
              Total Cases:{" "}
              <span className="font-bold text-brand">
                {currentData?.latestTotalCases}
              </span>
            </p>
            <p className="text-light">
              Daily Increase:{" "}
              <span className="font-bold text-brand">
                {currentData?.diffFromPrevDay}
              </span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Data;
