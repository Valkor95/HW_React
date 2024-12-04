import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import imageReducer from './slice/imageSlice.js';
import fetchSWData from './slice/SWstate.js';
import rootSaga from './saga/rootSaga.js';



const saga = createSagaMiddleware();

const store = configureStore({
    reducer: {
        image: imageReducer,
        SWData: fetchSWData,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga)
})

saga.run(rootSaga)

export default store;