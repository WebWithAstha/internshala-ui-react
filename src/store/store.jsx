import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "./reducers/studentSlice";

export const store = configureStore({
    reducer: {
        studentReducer: studentSlice
    }, // Your root reducer goes here.
})