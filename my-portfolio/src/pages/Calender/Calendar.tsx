import React, { useEffect, useState } from "react";
import { CalenderHeader } from "./Component/CalenderHeader/CalenderHeader";
import { Month } from "./Component/Month/Month";
import { SideBar } from "./Component/SideBar/SideBar";
import { useAppSelector } from "./Redux/hooks";


import { getMonth } from "./util";

export const Calendar = () => {

  const [currentMonth, setCurrentMonth] = useState<Date[][]>(getMonth());

  const monthIndex = useAppSelector(state => state.monthIndex.monthIndex)

  // update month by click
  useEffect(()=>{
    setCurrentMonth(getMonth(monthIndex))
  },[monthIndex])

  return (
    <div className={`h-screen flex flex-col `}>
      <CalenderHeader />
      <div className="flex flex-1">
        <SideBar />
        <Month month={currentMonth} />
      </div>
    </div>
  );
};
