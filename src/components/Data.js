import React from "react";

const Data = ({ data }) => {
  return data.length === 0 ? (
    <h1 className="text-center text-gray-700">Loading...</h1>
  ) : (
    <div id="search" className="flex flex-row flex-wrap justify-center items-center">
      {data.map((currentData, idx) => {
        return (
          <div
            className="flex flex-col justify-evenly items-center mb-2 max-w-sm rounded overflow-hidden shadow-md p-5 h-52 w-80 md:h-56 md:w-56 lg:h-72 lg:w-72 text-center font-mono m-2 bg-black my-10"
            key={currentData.country + idx}
          >
            <p className="text-light">{currentData?.country}</p>
            <p className="text-light">
              Total Cases:{" "}
              <span className="font-bold text-brand">{currentData?.latestTotalCases}</span>
            </p>
            <p className="text-light">
              Increase:{" "}
              <span className="font-bold text-brand">{currentData?.diffFromPrevDay}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Data;
