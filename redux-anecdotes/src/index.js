import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import anecdoteSlice from './reducers/anecdoteReducer'
import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    anecdotes : anecdoteSlice,
  }
})




ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
