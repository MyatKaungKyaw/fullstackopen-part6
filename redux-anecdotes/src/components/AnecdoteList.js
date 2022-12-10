import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(reducer => [...reducer.anecdotes].sort((a, b) => b.votes - a.votes))
    const dispatch = useDispatch()

    const voteClickHandler = (anecdote)=>{
        console.log(anecdote)
        dispatch(voteAnecdote(anecdote.id))
        dispatch(showNotification(`voted ${anecdote.content}`))
        setTimeout(() => {
            dispatch(showNotification(''))
        }, 50000);
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