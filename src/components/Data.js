import { useState, useEffect } from "react";

const Data = () => {
  const [coronavirusData, setCoronavirusData] = useState([]);

  const getCoronavirusData = async () => {
    const response = await fetch("http://localhost:8080/data");
    const data = await response.json();
    setCoronavirusData(data);
  };

  useEffect(() => {
    getCoronavirusData();
  }, []);

  return coronavirusData.length === 0 ? (
    <h1 className="text-center text-gray-700">Loading...</h1>
  ) : (
    <div className="flex flex-row flex-wrap justify-center items-center">
      {coronavirusData.map((currentData) => {
        return (
          <div className="flex flex-col justify-evenly items-center mb-2 max-w-sm rounded overflow-hidden shadow-md p-6 h-40 w-40 md:h-56 md:w-56 lg:h-72 lg:w-72 text-center font-mono m-2">
            {/* <p className="text-gray-700">{currentData?.state}</p> */}
            <p className="text-gray-700">{currentData?.country}</p>
            <p className="text-gray-700">
              Total Cases: {currentData?.latestTotalCases}
            </p>
            <p className="text-gray-700">
              Increase: {currentData?.diffFromPrevDay}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Data;
