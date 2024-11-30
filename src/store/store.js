import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import imageReducer from './slice/imageSlice.js';
import rootSaga from './saga/rootSaga.js';


const saga = createSagaMiddleware();

const store = configureStore({
    reducer: {
        image: imageReducer,
    },
    middleware: [saga],
})

saga.run(rootSaga)

export default store;