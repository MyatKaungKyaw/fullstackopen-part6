import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const notiSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        showNotification(state, action) {
            return action.payload
        },
        resetNotification(state, action) {
            return ''
        },
    }
})

export const { showNotification, resetNotification } = notiSlice.actions
export default notiSlice.reducer