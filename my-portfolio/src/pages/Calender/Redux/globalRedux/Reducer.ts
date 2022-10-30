
import { globalActionTypes, IProps, SET_DAY_SELECTED,  SET_DELETE_EVENT_DATA,  SET_EVENT_MODAL, SET_INDEX_BY_SMALL_CALENDAR, SET_SAVE_EVENT_DATA, SET_SELECTED_EVENT, SET_UPDATE_EVENT_DATA } from "./Type";


const initialState : IProps = {
    smallCalendarMonth  : new Date().getMonth(),
    daySelected : new Date(),
    showEventModal: false,
    savedEvent : [],
    selectedEvent : null
};

console.log(initialState.savedEvent)

export function globalReducer (state = initialState , action:any): IProps{
    switch (action.type) {
        case SET_INDEX_BY_SMALL_CALENDAR: {
            return {
                ...state,
                smallCalendarMonth  :  action.payload,
            };
        }

        case SET_DAY_SELECTED: {
            return {
                ...state,
                daySelected  :  action.payload,
            };
        }

        case SET_EVENT_MODAL: {
            return {
                ...state,
                showEventModal  :  action.payload,
            };
        }

        case SET_SAVE_EVENT_DATA : {
            return {
                ...state,
                savedEvent  :  [...state.savedEvent,action.payload],
            };
        }

        case SET_UPDATE_EVENT_DATA  : {
            return {
                ...state,
                
                savedEvent  :  state.savedEvent.map((item, idx)=>{ return idx === action.payload.id ? action.payload : item }),
            };
        }
        
        case SET_DELETE_EVENT_DATA: {
            return {
                ...state,
                savedEvent  :  state.savedEvent.filter((item, idx)=> idx !== action.payload.id ),
            };
        }

        case SET_SELECTED_EVENT: {
            return {
                ...state,
                selectedEvent  :  action.payload,
            };
        }

        default:
            return state;
    }

    
}
