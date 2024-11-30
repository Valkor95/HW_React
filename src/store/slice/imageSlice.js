import {createSlice} from "@reduxjs/toolkit";

const imageSlice = createSlice({
    name: 'image',
    initialState: {
        urlCV: '',
        urlSW: '',
        loading: false,
        error: null,
    },
    reducers: {
        fetchImageCVRequest: (state) => {
            state.loading = true;
        },
        fetchImageCVSuccess: (state, action) => {
            state.loading = false;
            state.urlCV = action.payload;
        },
        fetchImageSWRequest: (state) => {
            state.loading = true;
        },
        fetchImageSWSuccess: (state, action) => {
            state.loading = false;
            state.urlSW = action.payload;
        },
        fetchImageFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {fetchImageCVRequest, fetchImageCVSuccess, fetchImageSWRequest, fetchImageSWSuccess, fetchImageFailure} = imageSlice.actions
export default imageSlice.reducer;