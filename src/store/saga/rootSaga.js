import {all} from 'redux-saga/effects';
import {watchFetchImageSaga} from './imageSaga.js'

export default function* rootSaga(){
    yield all([
        watchFetchImageSaga(),
    ])
}