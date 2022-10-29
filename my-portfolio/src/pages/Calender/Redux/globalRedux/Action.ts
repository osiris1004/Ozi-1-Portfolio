import { SET_DAY_SELECTED, SET_EVENT_MODAL, SET_INDEX_BY_SMALL_CALENDAR } from "./Type"


export const  setIndexBySmallCalendar = (n : number) => {
    return {                      
        type: SET_INDEX_BY_SMALL_CALENDAR,
        payload : n        
    }                              
} 

//setDaySelectedBySmallCalendarAction

export const  setDaySelectedBySmallCalendar = (n : Date) => {
    return {                      
        type: SET_DAY_SELECTED,
        payload : n        
    }                              
} 

export const  setShowEvent = (n : boolean) => {
    return {                      
        type: SET_EVENT_MODAL,
        payload : n 
    }                              
} 