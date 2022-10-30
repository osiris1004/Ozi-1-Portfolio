



import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { globalReducer } from "./globalRedux/Reducer"
import { SET_DAY_SELECTED, SET_SAVE_EVENT_DATA, SET_SELECTED_EVENT } from "./globalRedux/Type"
import { monthIndexReducer} from "./MonthNavigation/ReducerMonthIndex"


export const store = configureStore({
  reducer: {
    monthIndex: monthIndexReducer,
    global : globalReducer
  },
  middleware : (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck :{
      ignoredActions: [SET_DAY_SELECTED, SET_SAVE_EVENT_DATA,SET_SELECTED_EVENT ],
      
      ignoredActionPaths: ['daySelected','savedEvent','selectedEvent'],
            ignoredPaths: ['global.daySelected','global.savedEvent','global.selectedEvent']
  },
  
})
 
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch