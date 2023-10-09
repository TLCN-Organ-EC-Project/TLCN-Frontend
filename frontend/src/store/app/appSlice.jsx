import { createSlice } from '@reduxjs/toolkit';

export const appSlice=createSlice({
    name:'app',
    initialState:{
        isLoading :false,
        isShowModal:false,
        modalChildren:null,
    },
    reducers:{
      ShowModal:(state, action)=>{
        state.isShowModal=action.payload.isShowModal
        state.modalChildren=action.payload.modalChildren
      },
    },
})

export const {ShowModal}=appSlice.actions

export default appSlice.reducer