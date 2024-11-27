import createSagaMiddleware from 'redux-saga';
import {configureStore} from "@reduxjs/toolkit";
import catsReducer from './slice/state.js'

const saga = createSagaMiddleware();

const store = configureStore({
    reducer: {
        cats: catsReducer,
    },
    middleware: [saga]
});

export default store;