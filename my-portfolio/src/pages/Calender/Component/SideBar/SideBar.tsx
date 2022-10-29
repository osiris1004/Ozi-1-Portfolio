import React from 'react'
import { CreateEventButton } from '../CreateEventButton/CreateEventButton'
import { SmallCalendar } from '../SmallCalendar'

export const SideBar = () => {
  return (
    <aside>
      <CreateEventButton/>
      <SmallCalendar/>
    </aside>
  )
}
