import {createSlice} from "@reduxjs/toolkit";

const imageSlice = createSlice({
    name: 'image',
    initialState: {
        url: '',
        loading: false,
        error: null,
    },
    reducers: {
        fetchImageRequest: (state) => {
            state.loading = true;
        },
        fetchImageSuccess: (state, action) => {
            state.loading = false;
            state.url = action.payload;
        },
        fetchImageFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {fetchImageRequest, fetchImageSuccess, fetchImageFailure} = imageSlice.actions
export default imageSlice.reducer;