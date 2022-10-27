import React, { useState } from 'react'
import { CalenderHeader } from './Component/CalenderHeader/CalenderHeader'
import { Month } from './Component/Month/Month'
import { SideBar } from './Component/SideBar/SideBar'
import { getMonth } from './util'

export const Calender = () => {
  const [currentMonth, setCurrentMonth] = useState<Date[][]>(getMonth())
  
  return (
    <div className={`h-screen flex flex-columns`}>
      <CalenderHeader />
      <div className="flex flex-1">
        <SideBar/>
        <Month month={currentMonth}/>
      </div>
    </div>
  )
}
