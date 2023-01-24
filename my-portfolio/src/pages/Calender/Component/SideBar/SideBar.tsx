import React from 'react'
import { CreateEventButton } from '../CreateEventButton/CreateEventButton'
import { SmallCalendar } from '../SmallCalendar'

export const SideBar = () => {
  return (
    <aside>
     <div className='flex flex-row, justify-center py-5'> <CreateEventButton/></div>
      <SmallCalendar/>
    </aside>
  )
}
