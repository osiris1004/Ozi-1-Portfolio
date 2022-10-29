import { IProps, SET_DAY_SELECTED, SET_EVENT_MODAL, SET_INDEX_BY_SMALL_CALENDAR } from "./Type";


const initialState : IProps = {
    smallCalendarMonth  : new Date().getMonth(),
    daySelected : new Date(),
    showEventModal: false
};

export function globalReducer (state = initialState , action:any): IProps  {
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

        default:
            return state;
    }
}
