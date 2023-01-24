import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { getMonth } from "../util";

import { setDaySelectedBySmallCalendar, setIndexBySmallCalendar } from "../Redux/globalRedux/Action";

export const SmallCalendar = () => {
  const [currentMonthIdx, setCurrentMonthIdx] = useState(new Date().getMonth());
  const [currentMonth, setCurrentMonth] = useState<Date[][]>(getMonth());

 

  const monthIndex = useAppSelector((state) => state.monthIndex.monthIndex);
  

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx));
  }, [currentMonthIdx]);

  useEffect(() => {
    setCurrentMonthIdx(monthIndex);
  }, [monthIndex]);

  

  

  //! formmating date 1
  let a = [{ month: "long" }, { year: "numeric" }];
  let customDate = formatDate(
    new Date(new Date().getFullYear(), currentMonthIdx),
    a,
    " "
  );

  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

  const incrementBtn = (n: number = 1) => {
    setCurrentMonthIdx((prev) => prev - n);
  };

  const decrementBtn = (n: number = 1) => {
    setCurrentMonthIdx((prev) => prev + n);
  };

  const daySelected = useAppSelector(state => state.global.daySelected)
  const getCurrentDayClass = (day :Date) =>{
   // console.log(day.getDate() )

    // const slcDay = daySelected && daySelected
    // console.log(slcDay )
    if(new Date().getMonth() === day.getMonth()){
       
        if(new Date().getDate() === day.getDate() ){
          return "bg-blue-500 text-white rounded-full " 
        }else if(day.getDate() === daySelected.getDate()){
          return  "bg-blue-100 text-blue-600 rounded-full font-bold"
        }else{
          return ""
        }
    }
}


//day.getDate() === daySelected


const dispatch = useAppDispatch()



  return (
    <div className={`mt-4 px-5`}>
      <header className={`flex justify-between pb-3`}>
        <p className={`ml-4  text-gray-500 `}>{customDate}</p>
        <div>
        <button onClick={() => incrementBtn()}>
          <span className={`cursor-pointer text-gray-600 mx-2`}>
            <FontAwesomeIcon icon={faLeftLong} />
          </span>
        </button>

        <button onClick={() => decrementBtn()}>
          <span className={`cursor-pointer text-gray-600 mx-2`}>
            <FontAwesomeIcon icon={faRightLong} />
          </span>
        </button>
        </div>
      </header>

      <div className={`grid grid-cols-7 grid-rows-6 `}>
        {currentMonth[0].map((day, i) => (
          <span key={i} className={`text-sm py-2 text-center`}>
            {daysOfWeek[i]}
          </span>
        ))}

        {currentMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <button className={` ${getCurrentDayClass(day)}`} key={idx} onClick={()=>{
                dispatch(setIndexBySmallCalendar(currentMonthIdx))
                dispatch(setDaySelectedBySmallCalendar(day))
                getCurrentDayClass(day)
              }}>
                <span className={`text-[10px] `}>{day.getDate()}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

//dispatch(increment(-1))
function formatDate(t: Date, a: {}[], s: string) {
  function format(m: any) {
    let f = new Intl.DateTimeFormat("en", m);
    return f.format(t);
  }
  return a.map(format).join(s);
}
