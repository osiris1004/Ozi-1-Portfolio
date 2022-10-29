import React, { useEffect, useState } from "react";
import { CalenderHeader } from "./Component/CalenderHeader/CalenderHeader";
import { EventModal } from "./Component/EventsModal/EventModal";
import { Month } from "./Component/Month/Month";
import { SideBar } from "./Component/SideBar/SideBar";
import { useAppSelector } from "./Redux/hooks";


import { getMonth } from "./util";

export const Calendar = () => {

  const [currentMonth, setCurrentMonth] = useState<Date[][]>(getMonth());

  const monthIndex = useAppSelector(state => state.monthIndex.monthIndex)
  const smallCalendarMonth = useAppSelector((state) => state.global.smallCalendarMonth);
  const showEventModal = useAppSelector((state) => state.global.showEventModal);
  

  // update month by click
  useEffect(()=>{
    setCurrentMonth(getMonth(monthIndex))
  },[monthIndex])

  useEffect(()=>{
    setCurrentMonth(getMonth(smallCalendarMonth))
  },[smallCalendarMonth])

  //console.log(monthIndex)
  return (
    <div className={`h-screen flex flex-col `}>
      {showEventModal && (<EventModal/>)}
      
      <CalenderHeader />
      <div className="flex flex-1">
        <SideBar />
        <Month month={currentMonth} />
      </div>
    </div>
  );
};
