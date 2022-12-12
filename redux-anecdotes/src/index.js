import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'

import {configureStore} from '@reduxjs/toolkit'

import anecdoteSlice from './reducers/anecdoteReducer'
import notificationSlice from './reducers/notificationReducer'
import filterSlice from './reducers/filterReducer'

const store = configureStore({
  reducer: {
    anecdotes : anecdoteSlice,
    notification: notificationSlice,
    filter: filterSlice,
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)