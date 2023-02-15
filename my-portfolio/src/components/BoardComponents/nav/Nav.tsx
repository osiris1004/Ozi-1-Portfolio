import React, { useState } from "react";
import logo from "../../../assets/LOGO.png";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

interface Iprop {
  children: ReactJSXElement;
}
export const Nav = ({ children }: Iprop) => {

    const [onOff, setOnOff] = useState(false)

    const handleMode = () =>{
        setOnOff(!onOff)
    }
//<i class="fa-solid fa-moon"></i>
//<i class="fa-regular fa-moon"></i>
  return (
    <div className="border bg-slate-800 text-white  h-20 flex w-8/12 m-auto rounded-[24px] px-14 items-center">
      <div className="mr-auto">
        {" "}
        <img
          src={logo}
          alt="Green Leaf Logo Png@clipartmax.com"
          style={{ width: 70 }}
        />
      </div>
      <div className="mx-5">sign out</div>
     <button className="mx-5" onClick={handleMode}> {onOff ? <FontAwesomeIcon icon={faMoon} />: <FontAwesomeIcon icon={faMoon} className="text-black"/>}</button>
      <div>{children}</div>
    </div>
  );
};
