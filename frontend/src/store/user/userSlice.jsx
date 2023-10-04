import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoggedIn: false,
        current: null,
        token: null,
        isLoading: false,
        mes: ''
    },
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = action.payload.isLoggedIn
            state.token = action.payload.token
            state.current=action.payload.current
        },
        logout: (state) => {
            state.isLoggedIn = false
            state.token = null
            state.current = null
            state.mes = ''
        },
        clearMessage: (state) => {
            state.mes = ''
        },
    },
    
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer