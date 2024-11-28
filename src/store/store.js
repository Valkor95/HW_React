import createSagaMiddleware from 'redux-saga';
import {configureStore} from "@reduxjs/toolkit";
import catsReducer from './slice/state.js'
import catSaga from './slice/catSaga.js'

const saga = createSagaMiddleware();

const store = configureStore({
    reducer: {
        cats: catsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
});
saga.run(catSaga);

export default store;