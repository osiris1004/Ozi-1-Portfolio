
import React, { useEffect, useState } from "react";
import {
  setDaySelectedBySmallCalendar,
  setSelectedEvent,
  setShowEvent,
} from "../../Redux/globalRedux/Action";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";


type Props = {
  day: Date;
  index: number;
};
export const Day = ({ day, index }: Props) => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const [dayEvents, setDayEvents] = useState<
    { title: string; description: string; selectedLabel: string; day: Date }[]
  >([]);
  
  const savedEvent = useAppSelector((state :any) => state.global.savedEvent);

  useEffect(() => {
    const events = savedEvent.filter((evt: any) => evt.day === day);
    setDayEvents(events);
  }, [savedEvent, day]);

  const getCurrentDayClass = () => {
    if (new Date().getMonth() === day.getMonth()) {
      return new Date().getDate() === day.getDate()
        ? "bg-blue-600 text-white rounded-full w-7 text-right  pr-5 px-5"
        : "";
    }
  };
  const dispatch = useAppDispatch();

  return (
    <div className={`border-r flex flex-col `}>
      <header className={"flex flex-col text-right  border relative "}>
        <p className={"text-sm my-1 leading-3"}>{daysOfWeek[index].toUpperCase()}</p>
        <p className={`text-sm p-1 my-1 absolute right-0 top-5 ${getCurrentDayClass()}`}>
          {day.getDate()}
          
        </p>
      </header>
      <div
        className={`flex-1 cursor-pointer`}
        onClick={() => {
          dispatch(setDaySelectedBySmallCalendar(day));
          dispatch(setShowEvent(true));
        }}
      >
        {dayEvents.map((item, i) => (
          <div
            key={i}
            className={`${item.selectedLabel} p-1 mr-6 text-white text-sm rounded mb-1 truncate border `}
            onClick={() => {
                console.log(item.selectedLabel)
              dispatch(
                setSelectedEvent({
                  id: i,
                  title: item.title,
                  description: item.description,
                  selectedLabel: item.selectedLabel,
                  day: item.day,
                })
              );

             
            }}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};
