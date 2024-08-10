import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "./reducers/studentSlice";
import employeeSlice from "./reducers/employeeSlice";

export const store = configureStore({
    reducer: {
        studentReducer: studentSlice,
        employeeReducer: employeeSlice
    }, // Your root reducer goes here.
})