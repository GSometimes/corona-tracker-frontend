import React from "react";

// import Search from "./Search";

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

    <>
      <div className="h-screen w-full flex">
        <div className=" w-full background-image flex justify-center items-center font-bold">
          <div class="container border-4 border-light rounded-lg mx-auto w-4/5 relative z-10 flex items-center py-16 px-16 my-24 md:my-32 bg-black bg-opacity-50">
            <div class="w-full flex flex-col items-center justify-between relative z-10">
              <p class="flex flex-col items-center font-extrabold text-center text-5xl md:text-6xl lg:text-8xl text-brand">
                Coronavirus Tracker
              </p>
              <p class="flex flex-col max-w-2xl items-center font-bold  text-sm md:text-base lg:text-lg mt-10 text-light">
                This application tracks the current number of cases reported
                across the globe since the first case was reported in December
                2019.
              </p>
              <p class="block text-brand py-3 px-4 text-lg font-bold uppercase mt-10">
                Scroll to Search
              </p>
              <svg
                class="w-12 mt-5 text-brand animate-bounce"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
