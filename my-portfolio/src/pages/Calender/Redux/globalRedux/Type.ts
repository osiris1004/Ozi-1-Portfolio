export interface IProps {
    smallCalendarMonth : number
    daySelected : Date
    showEventModal : boolean
}

export const SET_INDEX_BY_SMALL_CALENDAR = "SET_INDEX_BY_SMALL_CALENDAR";
export const SET_DAY_SELECTED = "SET_DAY_SELECTED "
export const SET_EVENT_MODAL = "SET_EVENT_MODAL"


interface setIndexBySmallCalendarAction {
    type: typeof SET_INDEX_BY_SMALL_CALENDAR
    payload : number
  
}

interface setDaySelectedBySmallCalendarAction {
    type : typeof SET_DAY_SELECTED
    payload : number
}

interface setShowEventAction {
    type : typeof SET_EVENT_MODAL
    
}





export type globalActionTypes = setIndexBySmallCalendarAction | setDaySelectedBySmallCalendarAction | setShowEventAction



