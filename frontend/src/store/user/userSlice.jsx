import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as actions from './asyncActions'


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoggedIn: false,
        current: null,
        token: null,
        isLoading: false,
        listCart:null,
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
     extraReducers: (builder) => {
        builder.addCase(actions.getListCart.pending, (state) => {
            state.isLoading = true;
        })
        //thuc hien action get Api
        builder.addCase(actions.getListCart.fulfilled, (state, action) => {
            state.isLoading = false;
            state.listCart = action.payload;
        });
        //Khi thuc hien that bai 
        builder.addCase(actions.getListCart.rejected, (state) => {
            state.isLoading = false;
        })

    }
    
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer