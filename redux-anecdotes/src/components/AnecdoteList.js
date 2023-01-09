import { useSelector, useDispatch } from 'react-redux'
import { voteServerAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'


const AnecdoteList = () => {
    const anecdotes = useSelector(({ anecdotes, filter }) => {
        const filterAnecdotes = anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
        return [...filterAnecdotes].sort((a, b) => b.votes - a.votes)
    })

    const dispatch = useDispatch()

    const voteClickHandler = (anecdote) => {
        dispatch(voteServerAnecdote(anecdote))
        dispatch(setNotification(`voted '${anecdote.content}'`,5))
    }

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
                        <button onClick={() => voteClickHandler(anecdote)}>vote</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default AnecdoteList