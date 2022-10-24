import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMenorah } from "@fortawesome/free-solid-svg-icons";


interface Iprops{
  handleMenu : ()=>void
}

export const Heading = ({handleMenu}:Iprops) => {
  
 
  return (
    <div className={` py-5 font-semibold fontKeySm text-gray-500 `}>
      <div className={`hidden sm:flex`}>
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
        <button
          className={`border-[1.7px] border-green-600 ml-3 px-5 text-green-600 rounded-md hover:bg-green-100/[.1]`}
        >
          Resume
        </button>
      </div>

      <button className={`sm:hidden  border-red-500 flex w-full justify-end px-5`} onClick={()=>{handleMenu()}}>
      
      <FontAwesomeIcon icon={faMenorah} style={{ color: "green", width: 30, height : 30}} /> 
      
      </button>
    </div>
  );
};
