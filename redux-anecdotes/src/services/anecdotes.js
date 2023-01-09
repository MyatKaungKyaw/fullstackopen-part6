import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const res = await axios.get(baseUrl)
    return res.data
}

const createAnecdote = async (content) => {
    const anecdote = {
        content,
        vote: 0,
    }
    const response = await axios.post(baseUrl, anecdote)
    return response.data
}

const modifyAencdote = async anecdote => {
    const res = await axios.put(`${baseUrl}/${anecdote.id}`, anecdote)
    console.log(res.data)
    return res.data
}

export default { getAll, createAnecdote, modifyAencdote }