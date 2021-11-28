import React from "react";


const Hero = () => {
  return (

    <>
      <div className="h-screen w-full flex">
        <div className=" w-full background-image flex justify-center items-center font-bold">
          <div class="container border-4 border-light rounded-lg mx-auto w-4/5 relative z-10 flex items-center py-16 px-16 my-24 md:my-32 bg-black bg-opacity-50">
            <div class="w-full flex flex-col items-center justify-between relative z-10">
              <p class="flex flex-col items-center font-extrabold font-mono text-center text-4xl md:text-6xl lg:text-8xl text-brand px-2">
                Coronavirus Tracker
              </p>
              <p class="flex flex-col max-w-2xl items-center font-bold font-mono text-sm md:text-base lg:text-lg mt-10 text-light">
                This application tracks the current number of cases reported
                across the globe since the first case was reported in December
                2019.
              </p>
              <p class="block text-brand py-3 px-4 text-sm md:text-base lg:text-lg font-mono font-bold uppercase mt-10">
                Scroll to Search
              </p>
              <svg
                class="w-12 md:w-14 lg:w-16 mt-7 text-brand animate-bounce"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
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
