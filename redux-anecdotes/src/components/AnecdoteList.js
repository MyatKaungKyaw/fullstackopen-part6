import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'

let timeOutHandle;

const AnecdoteList = () => {
    const anecdotes = useSelector(({ anecdotes, filter }) => {
        const filterAnecdotes = anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
        return [...filterAnecdotes].sort((a, b) => b.votes - a.votes)
    })

    const dispatch = useDispatch()

    const voteClickHandler = (anecdote) => {
        dispatch(voteAnecdote(anecdote.id))
        notificationVoted(anecdote.content)
    }

    const notificationVoted = (content) => {
        dispatch(showNotification(`voted '${content}'`))

        window.clearTimeout(timeOutHandle)

        timeOutHandle = window.setTimeout(() => {
            dispatch(showNotification(''))
        }, 5000);
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