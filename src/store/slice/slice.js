import {createSlice} from "@reduxjs/toolkit";
import {getDataUsers} from "../../services/StorageService.js";

const initialState = {
    data: getDataUsers() || []
}

const exampleSlice = createSlice({
    name: 'stateSlice',
    initialState,
    reducers: {
             addUser: (state, {payload}) => {
                 state.data.push(payload)
             }
    },
});

export const {addUser} = exampleSlice.actions;
export default exampleSlice.reducer