import React from "react";

const Loader = () => {
  let circleCommonClasses = "h-5 w-5 bg-black rounded-full";
  return (
    <div className="flex items-center justify-center m-10">
      <div className={`${circleCommonClasses} mr-2 animate-bounce`}></div>
      <div className={`${circleCommonClasses} mr-2 animate-bounce200`}></div>
      <div className={`${circleCommonClasses} animate-bounce400`}></div>
    </div>
  );
};

export default Loader;
