import { configureStore } from "@reduxjs/toolkit";

//
import recepiesSlice from "./recepiesSlice";

export const store = configureStore({
    reducer:{
        recepies: recepiesSlice
    }
})