import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import logo from "../../../../assets/LOGO.png";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { decrement, increment, reset } from "../../Redux/MonthNavigation/ActionMonthIndex";
export const CalenderHeader = () => {
  const monthIndex = useAppSelector(state => state.monthIndex.monthIndex)
  const dispatch = useAppDispatch();

  const year = new Date().getFullYear()
  const date =new Date( year, monthIndex, new Date().getDate()).toDateString()
  
  return (
    <header className="px-4 py-2 flex item-center border ">
      <img src={logo} alt={"calender"} className={`mr-2 w-12 h-12`} />
      <h1 className={`mr-10 text-xl text-gray-500 font-bold`}> OSIRIS Calendar</h1>
      <button className="border rounded py-2 px-4 mr-5" onClick={()=>dispatch(reset())}>Today</button>
      <button onClick={()=>dispatch(increment(-1))}>
        <span className={`cursor-pointer text-gray-600 mx-2`}>
          <FontAwesomeIcon icon={faLeftLong} />
        </span>
      </button>

      <button onClick={()=>dispatch(decrement(1))}>
        <span className={`cursor-pointer text-gray-600 mx-2`}>
          <FontAwesomeIcon icon={faRightLong} />
        </span>
      </button>
      <h2 className={`ml-4 text-xl text-gray-500 font-bold py-2`}>
        { date }
      </h2>
    </header>
  );
};
