import React from 'react'
import { connect, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Redux/MonthNavigation/ActionNavigation'
import { AppDispatch, RootState } from './Redux/store'


export const Counter = () => {
    
  const count = useAppSelector(state => state.press.value)
  const dispatch = useAppDispatch()

    return (
        <div>
          <div>
            <button
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
            <span>{count}</span>
            <button
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>
          </div>
        </div>
  )
}

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector