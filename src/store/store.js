import {configureStore, createStore} from "@reduxjs/toolkit";
import dataState from "./slice/dataState.js";


export const store = configureStore({
    reducer: {
        data: dataState,
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()]
})