import { IProps, SET_DAY_SELECTED, SET_DELETE_EVENT_DATA, SET_EVENT_MODAL, SET_INDEX_BY_SMALL_CALENDAR, SET_SAVE_EVENT_DATA, SET_SELECTED_EVENT, SET_UPDATE_EVENT_DATA } from "./Type"


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

export const  setSaveEventData = (n : Object) => {
    return {                      
        type: SET_SAVE_EVENT_DATA ,
        payload : n 
    }                              
} 

export const  setUpdateEventData = (n : Object) => {
    return {                      
        type: SET_UPDATE_EVENT_DATA ,
        payload : n 
    }                              
} 

export const  setSelectedEvent= (n : Object | null) => {
    return {                      
        type: SET_SELECTED_EVENT ,
        payload : n 
    }                              
} 