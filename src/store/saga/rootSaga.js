import {all} from 'redux-saga/effects';
import {watchFetchImageSaga} from './imageSaga.js'
import {watchFetchSWSaga} from "./SWSaga.js";

export default function* rootSaga(){
    yield all([
        watchFetchImageSaga(),
        watchFetchSWSaga()
    ])
}