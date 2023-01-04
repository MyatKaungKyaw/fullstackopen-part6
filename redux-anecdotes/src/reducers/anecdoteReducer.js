import { createSlice } from '@reduxjs/toolkit'


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
      return state.map(anecdote => action.payload === anecdote.id
        ? {
          ...anecdote,
          votes: anecdote.votes + 1
        }
        : anecdote)
    },
    createAnecdote(state, action) {
      return state.concat(asObject(action.payload))
    },
    setAnecdote(state,action){
      return action.payload
    }
  }
})

export const { voteAnecdote, createAnecdote, setAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer