import React from "react";

export const Heading = () => {
  return (
    <div className={`flex py-5 font-semibold fontKeySm text-gray-500`} >
      <div className={`border border-red-500`}>LOGO</div>

      <button className={` border-red-500 ml-auto p-2 hover:text-green-600 `}>
        <span className={`text-green-600`}>01.</span>About
      </button>
      <button className={` border-red-500 ml-3 p-2 hover:text-green-600`}>
        <span className={`text-green-600`}>02.</span>Experience
      </button>
      <button className={` border-red-500 ml-3 p-2 hover:text-green-600`}>
        <span className={`text-green-600`}>03.</span>Work
      </button>
      <button className={` border-red-500 ml-3 p-2 hover:text-green-600`}>
        <span className={`text-green-600`}>04.</span>Contact
      </button>
      <button className={`border-[1.7px] border-green-600 ml-3 px-5 text-green-600 rounded-md hover:bg-green-100/[.1]`}>Resume</button>
    </div>
  );
};
