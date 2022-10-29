
export interface IProps {
    monthIndex : number
}

export const INCREMENT_MONTH = "INCREMENT_MONTH";
export const DECREMENT_MONTH = "DECREMENT_MONTH ";
export const RESET = "RESET";



interface incrementMonthAction {
    type: typeof INCREMENT_MONTH
    payload: number
}

interface decrementMonthAction {
    type: typeof DECREMENT_MONTH
    payload: number
}

interface resetMonthAction {
    type: typeof RESET
    
}



export type monthIndexActionTypes = decrementMonthAction | incrementMonthAction | resetMonthAction



