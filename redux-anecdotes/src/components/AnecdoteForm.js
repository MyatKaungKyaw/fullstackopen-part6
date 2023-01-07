import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { showNotification,resetNotification } from '../reducers/notificationReducer'
import anecdotes from '../services/anecdotes'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = async (e) => {
        e.preventDefault()
        const content = e.target.anecdote.value
        e.target.anecdote.value = ''
        const anecdote = await anecdotes.createAnecdote(content)
        dispatch(createAnecdote(anecdote))
        showCreateNoti(anecdote)
    }
    
    const showCreateNoti = (anecdote)=>{
        dispatch(showNotification(`created '${anecdote.content}'`))
        setTimeout(() => {
            dispatch(showNotification(''))
        }, 5000);
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

export default AnecdoteForm