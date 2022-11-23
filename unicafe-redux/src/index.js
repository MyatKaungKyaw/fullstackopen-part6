import React from 'react';
import ReactDOM from 'react-dom/client'
import { createStore } from 'redux'
import counterReducer from './reducers/counterReducer'

const store = createStore(counterReducer)

const App = () => {
  const good = () => { store.dispatch({ type: 'GOOD' }) }
  const ok = () => { store.dispatch({ type: 'OK' }) }
  const bad = () => { store.dispatch({ type: 'BAD' }) }
  const zero = () => { store.dispatch({ type: 'ZERO' }) }
  const state = store.getState()
  return (
    <div>
      <button onClick={good}>good</button>
      <button onClick={ok}>ok</button>
      <button onClick={bad}>bad</button>
      <button onClick={zero}>reset stats</button>
      <div>good {state.good}</div>
      <div>ok {state.ok}</div>
      <div>bad {state.bad}</div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)
