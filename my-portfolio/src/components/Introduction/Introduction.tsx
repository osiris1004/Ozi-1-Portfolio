import React from "react";

export const Introduction = () => {
  return (
    <div className={`border border-red-500 w-2/4 m-auto`}>
      {/* text */}
      <div>
        <p className={`border border-yellow-500 font-extrabold py-2`}>Hi, my name is</p>
        <p className={`border border-yellow-500 text-5xl font-extrabold py-2`}>Brittany Chiang.</p>
        <p className={`border border-yellow-500 text-5xl font-extrabold text-gray-600 py-2`}>I build things for the web.</p>
        <p className={`border border-yellow-500 font-medium py-2`}>
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at Upstatement.
        </p>
      </div>

      {/* button */}
      <div className={`py-11`}>
      <button className={`border border-red-500 p-2 hover:text-sky-700 rounded-md`}>Check out my course!</button>
      </div>
    </div>
  );
};
