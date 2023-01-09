import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'


const anecdotesAtStart = []

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    voteAnecdote(state, action) {
      return state.map(anecdote => action.payload.id === anecdote.id
        ? action.payload
        : anecdote)
    },
    // createAnecdote(state, action) {
    //   return state.concat(action.payload)
    // },
    setAnecdote(state, action) {
      return action.payload
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
  }
})

export const { voteAnecdote, setAnecdote, appendAnecdote } = anecdoteSlice.actions


export const initializeAnecdote = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdote(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const anecdote = await anecdoteService.createAnecdote(content)
    dispatch(appendAnecdote(anecdote))
  }
}

export const voteServerAnecdote = anecdote => {
  return async dispatch => {
    const votedAnecdote = {
      ...anecdote,
      votes: anecdote.votes + 1
    }
    const updatedAnecdote = await anecdoteService.modifyAencdote(votedAnecdote)
    dispatch(voteAnecdote(updatedAnecdote))
  }
}



export default anecdoteSlice.reducer