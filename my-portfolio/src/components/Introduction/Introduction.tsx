import React from "react";

export const Introduction = () => {
  return (
    <div className={` border-red-500 w-8/12 m-auto sm:h-screen flex items-center`}>
     <div className={` border-white-500 `}>
       {/* text */}
       <div>
        <p className={` border-yellow-500 font-extrabold py-2 fontKey text-green-600 `}>Hi, my name is</p>
        <p className={` border-yellow-500 text-5xl font-extrabold py-2 text-gray-400 fontNameXl`}>Osiris Dev.</p>
        <p className={` border-yellow-500 text-5xl font-extrabold text-gray-500 py-2 fontName`}>I build things for the web.</p>
        <p className={` border-yellow-500 font-medium py-2 pt-7 text-gray-500 lg:w-9/12`}>
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at <span className={`text-green-500`}>Upstatement.</span>
        </p>
      </div>

      {/* button */}
      <div className={`py-11`}>
      <button className={`border-[1.7px]  border-green-600 py-3 px-3 text-green-600 hover:bg-green-100/[.1]  rounded-md fontKey`}>Check out my course!</button>
      </div>
     </div>
    </div>
  );
};
