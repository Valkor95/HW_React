import {configureStore} from "@reduxjs/toolkit";
import stateSlice from './slice/slice.js';
import {thunk} from "redux-thunk";

const store = configureStore({
    reducer: {
        data: stateSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})

export default store