



import { configureStore } from "@reduxjs/toolkit"
import { monthIndexReducer} from "./MonthNavigation/ReducerMonthIndex"


export const store = configureStore({
  reducer: {
    monthIndex: monthIndexReducer
  }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch