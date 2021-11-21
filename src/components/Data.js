import React from "react";

const Data = ({ data }) => {
  return data.length === 0 ? (
    <h1 className="text-center text-gray-700">Loading...</h1>
  ) : (
    <div className="flex flex-row flex-wrap justify-center items-center">
      {data.map((currentData) => {
        return (
          <div className="flex flex-col justify-evenly items-center mb-2 max-w-sm rounded overflow-hidden shadow-md p-6 h-40 w-40 md:h-56 md:w-56 lg:h-72 lg:w-72 text-center font-mono m-2 bg-gray-light">
            {/* <p className="text-gray-700">{currentData?.state}</p> */}
            <p className="text-blue-dark">{currentData?.country}</p>
            <p className="text-blue-dark">
              Total Cases:{" "}
              <span className="font-bold">{currentData?.latestTotalCases}</span>
            </p>
            <p className="text-blue-dark">
              Increase:{" "}
              <span className="font-bold">{currentData?.diffFromPrevDay}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Data;
