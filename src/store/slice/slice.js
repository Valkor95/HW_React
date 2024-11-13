import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {addNewId, getDataUsers, getUserIndexById, setDataUsers} from "../../services/StorageService.js";

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (quantity) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await response.json();
        return result.slice(0, quantity);
    }
);

const initialState = {
    data: getDataUsers() || [],
    loading: false,
    error: null,
}

const exampleSlice = createSlice({
    name: 'stateSlice',
    initialState,
    reducers: {
             addUser: (state, {payload}) => {
                 state.data.push(payload);
             },
            updateUser: (state, {payload}) => {
                 const index = getUserIndexById(payload.id);
                 if (index !== -1){
                     state.data[index] = {...state.data[index], ...payload}
                 }
            }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.data = payload;
                setDataUsers(payload);
            })
            .addCase(fetchUsers.rejected, (state, { error }) => {
                state.loading = false;
                state.error = error.message;
            });
    }
});

export const {addUser, updateUser} = exampleSlice.actions;
export default exampleSlice.reducer