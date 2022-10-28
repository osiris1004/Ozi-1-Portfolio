import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { getMonth } from "../util";
import { decrement, increment } from "../Redux/MonthNavigation/ActionMonthIndex";

export const SmallCalendar = () => {
  const [currentMonthIdx, setCurrentMonthIdx] = useState(new Date().getMonth());
  const [currentMonth, setCurrentMonth] = useState<Date[][]>(getMonth());

  const monthIndex = useAppSelector(state => state.monthIndex.monthIndex)
 

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx));
    setCurrentMonthIdx(monthIndex)
  }, [currentMonthIdx,monthIndex]);
  function formatDate(t: Date, a: {}[], s: string) {
    function format(m: any) {
      let f = new Intl.DateTimeFormat("en", m);
      return f.format(t);
    }
    return a.map(format).join(s);
  }

  let a = [{ month: "long" }, { year: "numeric" }];
  let customDate = formatDate(
    new Date(new Date().getFullYear(), currentMonthIdx),
    a,
    " "
  );

  const incrementBtn = (n:number = 1) =>{
    setCurrentMonthIdx(prev=> prev-n)
  }

  const decrementBtn = (n:number = 1) =>{
    setCurrentMonthIdx(prev=> prev+n)
  }

  //const date =new Date( new Date().getFullYear(), currentMonthIdx).toDateString()

  return (
    <div className={`mt-9`}>
      <header className={`flex justify-between`}>
        <p className={`ml-4  text-gray-500 `}>{customDate}</p>
        <button onClick={()=>incrementBtn()}>
          <span className={`cursor-pointer text-gray-600 mx-2`}>
            <FontAwesomeIcon icon={faLeftLong} />
          </span>
        </button>

        <button onClick={()=>decrementBtn()}>
          <span className={`cursor-pointer text-gray-600 mx-2`}>
            <FontAwesomeIcon icon={faRightLong} />
          </span>
        </button>
      </header>
    </div>
  );
};

//dispatch(increment(-1))
