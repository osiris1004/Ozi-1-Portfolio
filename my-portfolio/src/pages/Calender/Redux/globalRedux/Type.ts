export interface IProps {
    smallCalendarMonth : number
    daySelected : Date
    showEventModal : boolean
    savedEvent : {title:string, description:string, selectedLabel :string, day: Date}[]
    selectedEvent : {id:number, title:string, description:string, selectedLabel :string, day: Date} | null
}

export const SET_INDEX_BY_SMALL_CALENDAR = "SET_INDEX_BY_SMALL_CALENDAR";
export const SET_DAY_SELECTED = "SET_DAY_SELECTED "
export const SET_EVENT_MODAL = "SET_EVENT_MODAL"
export const SET_SAVE_EVENT_DATA = "SET_SAVE_EVENT_DATA"
export const SET_UPDATE_EVENT_DATA = "SET_UPDATE_EVENT_DATA"
export const SET_DELETE_EVENT_DATA = "SET_DELETE_EVENT_DATA"
export const SET_SELECTED_EVENT = "SET_SELECTED_EVENT"


interface setIndexBySmallCalendarAction {
    type: typeof SET_INDEX_BY_SMALL_CALENDAR
    payload : number
  
}

interface setDaySelectedBySmallCalendarAction {
    type : typeof SET_DAY_SELECTED
    payload : Date
}

interface setShowEventAction {
    type : typeof SET_EVENT_MODAL
    payload : boolean
}

interface setSaveEventDataAction {
    type : typeof SET_SAVE_EVENT_DATA 
    payload : {title:string, description:string, selectedLabel :string, day: Date}
}


interface setUpdateEventDataAction {
    type : typeof SET_UPDATE_EVENT_DATA
    payload : {title:string, description:string, selectedLabel :string, day: Date}
}


interface setSelectedEventAction {
    type : typeof SET_SELECTED_EVENT
    payload : {id:number, title:string, description:string, selectedLabel :string, day: Date} | null
}


interface setDeleteEventDataAction {
    type : typeof SET_DELETE_EVENT_DATA
    payload : {id: number}
}





export type globalActionTypes = setIndexBySmallCalendarAction | setDaySelectedBySmallCalendarAction | setShowEventAction | setSaveEventDataAction | setUpdateEventDataAction | setDeleteEventDataAction | setSelectedEventAction



