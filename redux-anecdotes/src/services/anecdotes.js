import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const res = await axios.get(baseUrl)
    return res.data
}

const createAnecdote = async (content) => {
    const anecdote = {
        content,
        vote:0,
    }
    return await axios.post(baseUrl,anecdote).data
}

export default {getAll}