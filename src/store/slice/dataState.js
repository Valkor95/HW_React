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

export const {saveData} = dataState.actions;

export const getData = () => dispatch => {
    fetch('https://swapi.py4e.com/api/people/1')
        .then(res => res.json())
        .then(result => {
            dispatch(saveData(result))
        })
}

export default dataState.reducer