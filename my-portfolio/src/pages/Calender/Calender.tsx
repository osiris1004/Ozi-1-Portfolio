import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { CalenderHeader } from './Component/CalenderHeader/CalenderHeader'
import { Month } from './Component/Month/Month'
import { SideBar } from './Component/SideBar/SideBar'
import { Counter } from './Counter'
import { store } from './Redux/store'

import { getMonth } from './util'

export const Calender = () => {
  const [currentMonth, setCurrentMonth] = useState<Date[][]>(getMonth())


  
  return (
    <Provider store = {store}>
      <div className={`h-screen flex flex-col `}>
      <CalenderHeader />
      <div className="flex flex-1">
        <SideBar/>
        <Month month={currentMonth}/>
      </div>
    </div>

    <Counter/>
    </Provider>
  )
}
