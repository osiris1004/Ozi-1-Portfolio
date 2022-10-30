import { type } from '@testing-library/user-event/dist/type'
import React, { useEffect, useState } from 'react'
import { setDaySelectedBySmallCalendar, setSelectedEvent, setShowEvent } from '../../Redux/globalRedux/Action'
import { useAppDispatch, useAppSelector } from '../../Redux/hooks'
import { Month } from '../Month/Month'

type Props = {
    day : Date
    index: number
}
export const Day = ({day, index}:Props) => {
    const daysOfWeek = ['Sun', 'Mon','Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    const [dayEvents,setDayEvents] = useState<{title:string, description:string, selectedLabel :string, day: Date}[]>([])
    const savedEvent = useAppSelector((state) => state.global.savedEvent);
    
  
    
   
    useEffect(()=>{
        
        const events = savedEvent.filter(evt => evt.day === day)
        setDayEvents(events)
       console.log(events)
    },[savedEvent])

    const getCurrentDayClass = () =>{
        if(new Date().getMonth() === day.getMonth()){
            return new Date().getDate() === day.getDate() ? "bg-blue-600 text-white rounded-full w-7" : ""
        }
        
    }
    const dispatch = useAppDispatch();
  
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
        <div className={`flex-1 cursor-pointer`} onClick={()=>{
            dispatch(setDaySelectedBySmallCalendar(day))
            dispatch(setShowEvent(true))
        }}>  
            {dayEvents.map((item,i)=>(
                <div key={i} className={`bg-${item.selectedLabel}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate border`} onClick={()=>dispatch(setSelectedEvent({id:i, title:item.title, description:item.description, selectedLabel :item.selectedLabel, day: item.day}))}>
                    {item.title}
                </div>
            ))}
        </div>
    </div>
       
     
  )
}
