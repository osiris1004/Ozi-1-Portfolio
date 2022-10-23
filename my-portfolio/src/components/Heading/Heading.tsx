import React from "react";

export const Heading = () => {
  return (
    <div className={`flex py-5 font-semibold`} >
      <div className={`border border-red-500`}>LOGO</div>

      <button className={`border border-red-500 ml-auto p-2 hover:text-sky-700`}>
        <span className={`text-sky-700`}>01.</span>About
      </button>
      <button className={`border border-red-500 ml-2 p-2 hover:text-sky-700`}>
        <span className={`text-sky-700`}>02.</span>Experience
      </button>
      <button className={`border border-red-500 ml-2 p-2 hover:text-sky-700`}>
        <span className={`text-sky-700`}>03.</span>Work
      </button>
      <button className={`border border-red-500 ml-2 p-2 hover:text-sky-700`}>
        <span className={`text-sky-700`}>04.</span>Contact
      </button>
      <button className={`border border-red-500 ml-2 p-2 hover:text-sky-700 rounded-md`}>Resume</button>
    </div>
  );
};
