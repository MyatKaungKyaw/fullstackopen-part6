import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import Filter from './components/Filter'
import anecdotes from './services/anecdotes'
import {useDispatch} from 'react-redux'
import { useEffect } from 'react'
import { setAnecdote } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    anecdotes.getAll().then(anecdotes => dispatch(setAnecdote(anecdotes)))
  },[]) // eslint-disable-line react-hooks/exhaustive-deps  

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