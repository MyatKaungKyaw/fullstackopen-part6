import { createSlice } from '@reduxjs/toolkit'

const initialState = ''
let timeOutHandle

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


export const setNotification = (content,sec) => {
    return async dispatch => {
        console.log(content)
        dispatch(showNotification(content))
        window.clearTimeout(timeOutHandle)
        timeOutHandle = window.setTimeout(() => {
            dispatch(resetNotification())
        },sec*1000)
    }
}


export default notiSlice.reducer