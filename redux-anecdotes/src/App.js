import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from './reducers/anecdoteReducer'


const App = () => {
  const Anecdotes = () => {
    const anecdotes = useSelector(state => state)
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
    return (
      <>
        <h2>create new</h2>
        <form>
          <div><input /></div>
          <button>create</button>
        </form>
      </>
    )
  }

  return (
    <div>
      <Anecdotes />
      <NewAnecdote/>
    </div>
  )
}

export default App