import {configureStore} from "@reduxjs/toolkit";
import stateSlice from './slice/slice.js';

const store = configureStore({
    reducer: {
        data: stateSlice,
    }
})

export default store