import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

const dataState = createSlice({
    name: 'data',
    initialState,
    reducers: {
        saveData: (state, {payload}) => {
            state.push(payload)
        }
    }
})

let id = 1;
export const getData = () => dispatch => {
    fetch(`https://swapi.dev/api/people/${id}`)
        .then(res => res.json())
        .then(result => {
            dispatch(saveData(result))
        })
    id++
}
export const {saveData} = dataState.actions;
export default dataState.reducer