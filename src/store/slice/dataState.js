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

export const getData = () => dispatch => {
    fetch('https://swapi.dev/api/people/1/')
        .then(res => res.json())
        .then(result => {
            dispatch(saveData(result))
        })
}
export const {saveData} = dataState.actions;
export default dataState.reducer