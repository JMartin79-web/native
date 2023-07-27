import { createSlice } from "@reduxjs/toolkit";

// DATPS
import RECEPIES from "../components/data/recepies.json"


const initialState = {
    data: RECEPIES
}

const recepiesSlice = createSlice({
    name: "recepies",
    initialState,
    reducers: {}
})

export default recepiesSlice.reducer