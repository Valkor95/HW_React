import {configureStore} from "@reduxjs/toolkit";
import stateSlice from './slice/slice.js';
import counterSlice from './slice/counter.js'
import {thunk} from "redux-thunk";

const store = configureStore({
    reducer: {
        data: stateSlice,
        counter: counterSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})

export default store