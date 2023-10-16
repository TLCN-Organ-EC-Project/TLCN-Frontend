import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as apis  from '../../apis/user'


export const getListCart= createAsyncThunk('user/listCart',async({username},{rejectWithValue})=>{
    const response=await apis.getListCart(username)
    if(!response) return rejectWithValue(response)
    return response.rs
})