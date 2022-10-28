import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import { Month } from '../Month/Month'

type Props = {
    day : Date
    index: number
}
export const Day = ({day, index}:Props) => {
    const daysOfWeek = ['Sun', 'Mon','Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    const getCurrentDayClass = () =>{
        if(new Date().getMonth() === day.getMonth()){
            return new Date().getDate() === day.getDate() ? "bg-blue-600 text-white rounded-full w-7" : ""
        }
        
    }
  return (
    <div className={`border border-gray-200 flex flex-col `}>
       <header className={"flex flex-col items-center"}>
       <p className={"text-sm my-1 "}>
        {daysOfWeek[index].toUpperCase()}
        </p>
        <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
            {day.getDate()}
        </p>
       </header>
        
    </div>
       
     
  )
}
