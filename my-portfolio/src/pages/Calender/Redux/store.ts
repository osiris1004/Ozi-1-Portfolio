



import { configureStore } from "@reduxjs/toolkit"
import { globalReducer } from "./globalRedux/Reducer"
import { monthIndexReducer} from "./MonthNavigation/ReducerMonthIndex"


export const store = configureStore({
  reducer: {
    monthIndex: monthIndexReducer,
    global : globalReducer
  }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch