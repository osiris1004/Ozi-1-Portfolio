import {  DECREMENT_MONTH, INCREMENT_MONTH, IProps, monthIndexActionTypes } from "./TypeMonthIndex";

const initialState : IProps = {
    monthIndex  : new Date().getMonth(),
};

export function monthIndexReducer (state = initialState , action:any): IProps  {
    switch (action.type) {
        case INCREMENT_MONTH: {
            return {
                ...state,
                monthIndex  : state.monthIndex  + action.payload
            };
        }

        case DECREMENT_MONTH: {
            return {
                ...state,
                monthIndex  : state.monthIndex  + action.payload
            };
        }

        default:
            return state;
    }
}
