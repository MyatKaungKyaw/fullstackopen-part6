import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import Filter from './components/Filter'
import {useDispatch} from 'react-redux'
import { useEffect } from 'react'
import { initializeAnecdote } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(initializeAnecdote())
  },[dispatch]) 

  return (
    <div>
      <Notification />
      <Filter />
      <AnecdoteForm />
      <AnecdoteList />
    </div>
  )
}

export default App