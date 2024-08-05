import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    info:null,
    
}


const studentSlice =  createSlice({
    name:"student",
    initialState,
    reducers:{
        load:(state,action)=>{state.info = action.payload}
    }
})


export default studentSlice.reducer
export const {load} = studentSlice.actions