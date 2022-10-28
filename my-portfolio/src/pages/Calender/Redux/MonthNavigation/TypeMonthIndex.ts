
export interface IProps {
    monthIndex : number
}

export const INCREMENT_MONTH = "INCREMENT_MONTH";
export const DECREMENT_MONTH = "DECREMENT_MONTH ";



interface incrementMonthAction {
    type: typeof INCREMENT_MONTH
    payload: number
}

interface decrementMonthAction {
    type: typeof DECREMENT_MONTH
    payload: number
}



export type monthIndexActionTypes = decrementMonthAction | incrementMonthAction 



