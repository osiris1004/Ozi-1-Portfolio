import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";
import React from 'react'
import { useAppDispatch } from '../../Redux/hooks';
import { setShowEvent } from '../../Redux/globalRedux/Action';

export const CreateEventButton = () => {
  const dispatch = useAppDispatch()
  return (
    
    <button className={`border p-2 rounded-full flex items-center shadow-md hover:shadow`} onClick={()=>dispatch(setShowEvent(true))}>
      <FontAwesomeIcon icon={faCalendarPlus} className={`w-7 g-7`}/>
      <span className={`pl-3 pr-7`}>Create Event</span>
    </button>
  )
}
