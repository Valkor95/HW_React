import {createSlice} from "@reduxjs/toolkit";
import {addNewId, getDataUsers, getUserIndexById} from "../../services/StorageService.js";

const initialState = {
    data: getDataUsers() || []
}

const exampleSlice = createSlice({
    name: 'stateSlice',
    initialState,
    reducers: {
             addUser: (state, {payload}) => {
                 const newId = addNewId();
                 state.data.push({newId, ...payload})
             },
            updateUser: (state, {payload}) => {
                 const index = getUserIndexById(payload.id)
                 state.data[index] = payload;
            }
    },
});

export const {addUser, updateUser} = exampleSlice.actions;
export default exampleSlice.reducer