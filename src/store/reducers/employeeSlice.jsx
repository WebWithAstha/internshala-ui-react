import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    info:null,
    
}


const employeeSlice =  createSlice({
    name:"employee",
    initialState,
    reducers:{
        load:(state,action)=>{state.info = action.payload}
    }
})


export default employeeSlice.reducer
export const {load} = employeeSlice.actions