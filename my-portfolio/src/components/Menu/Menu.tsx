import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
interface Iprops {
  handleMenu: () => void;
}

export const Menu = ({ handleMenu }: Iprops) => {
  return (
    <div
      className={`flex items-center h-screen justify-center text-gray-500 fontKeySm`}
    >
      <div>
        <div className={`absolute top-0 right-0 px-5`}>
          <button className={` border-yellow-500 `} onClick={() => { handleMenu();}}>
            <FontAwesomeIcon
              icon={faCircleXmark}
              style={{ color: "green", width: 30, height: 30 }}
            />
          </button>
        </div>
        <div>
          <div className={`border border-red-500 `}>LOGO</div>

          <div>
            <button
              className={` border-red-500 ml-auto my-3 p-2 hover:text-green-600 `}
            >
              <span className={`text-green-600`}>01.</span>About
            </button>
          </div>
          <div>
            <button className={` border-red-500 my-3 p-2 hover:text-green-600`}>
              <span className={`text-green-600`}>02.</span>Experience
            </button>
          </div>
          <div>
            <button className={` border-red-500 my-3 p-2 hover:text-green-600`}>
              <span className={`text-green-600`}>03.</span>Work
            </button>
          </div>
          <div>
            <button className={` border-red-500 my-3 p-2 hover:text-green-600`}>
              <span className={`text-green-600`}>04.</span>Contact
            </button>
          </div>
          <div>
            <button
              className={`border-[1.7px] border-green-600 my-3  px-5 text-green-600 rounded-md hover:bg-green-100/[.1]`}
            >
              Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
