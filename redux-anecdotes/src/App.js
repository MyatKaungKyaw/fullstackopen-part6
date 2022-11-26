import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote, createAnecdote } from './reducers/anecdoteReducer'


const App = () => {
  const Anecdotes = () => {
    const anecdotes = useSelector(state => state).sort((a,b) => b.votes - a.votes)
    console.log(anecdotes)
    const dispatch = useDispatch()
    return (
      <>
        <h2>Anecdotes</h2>
        {anecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => dispatch(voteAnecdote(anecdote.id))}>vote</button>
            </div>
          </div>
        )}
      </>
    )
  }

  const NewAnecdote = () => {
    const dispatch = useDispatch()

    const addAnecdote = (e) => {
      e.preventDefault()
      const anecdote = e.target.anecdote.value
      e.target.anecdote.value=''
      dispatch(createAnecdote(anecdote))
    }
    
    return (
      <>
        <h2>create new</h2>
        <form onSubmit={addAnecdote}>
          <div><input name='anecdote' /></div>
          <button type='submit'>create</button>
        </form>
      </>
    )
  }

  return (
    <div>
      <Anecdotes />
      <NewAnecdote />
    </div>
  )
}

export default App