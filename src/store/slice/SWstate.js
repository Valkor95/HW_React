import {createSlice} from "@reduxjs/toolkit";


const SWslice = createSlice({
    name: 'SWinfo',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {
        fetchSWDataRequest: (state) => {
            state.loading = true;
        },
        fetchSWDataSuccess: (state, action) => {
            state.loading = false;
            state.data.push(action.payload);
        },
        fetchSWDataFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
});

export const {fetchSWDataRequest, fetchSWDataSuccess, fetchSWDataFailure} = SWslice.actions

export default SWslice.reducer;