
export interface IProps {
    value :  number
}

export const INCREMENT = "INCREMENT";
export const DECREMENT= "DECREMENT";
export const VALUE= "VALUE";




interface incrementAction {
    type: typeof INCREMENT,
}

interface decrementAction {
    type: typeof DECREMENT,
}

interface valueAction {
    type: typeof VALUE,
}

export type increDicreActionTypes = valueAction | incrementAction | decrementAction 



