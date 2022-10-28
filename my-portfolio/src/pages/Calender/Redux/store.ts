
// import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';


import { configureStore } from "@reduxjs/toolkit"
import { pressReducer } from "./MonthNavigation/ReducerNavigation"

// import {  pressReducer } from './MonthNavigation/ReducerNavigation'
// import thunk from "redux-thunk";
// import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';

// export const rootReducer = combineReducers({
//   reducer: {
//     counter : pressReducer,
//   },
// })

// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// export type RootState = ReturnType<typeof rootReducer>
// export type AppDispatch = typeof store.dispatch
export const store = configureStore({
  reducer: {
    press: pressReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch