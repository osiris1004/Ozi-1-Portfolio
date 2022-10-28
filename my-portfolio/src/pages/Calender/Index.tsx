import React from 'react'
import { Provider} from 'react-redux'
import { Calendar } from './Calendar'
import { store } from './Redux/store'

export const Index = () => {
  return (
    <Provider store={store}>
      <Calendar/>
    </Provider>
  )
}

