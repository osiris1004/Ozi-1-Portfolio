import { DECREMENT, increDicreActionTypes, INCREMENT, IProps } from "./TypeNavigation";

const initialState : IProps = {
    value  : 0,
};

export function pressReducer(state = initialState , action:increDicreActionTypes): IProps  {
    switch (action.type) {
        case INCREMENT: {
            return {
                ...state,
                value : state.value + 1
            };
        }

        case DECREMENT: {
            return {
                ...state,
                value : state.value - 1
            };
        }

        default:
            return state;
    }
}
