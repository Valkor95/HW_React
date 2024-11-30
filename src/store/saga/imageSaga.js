import {call, put, takeLatest} from 'redux-saga/effects';
import axios from "axios";
import { fetchImageRequest, fetchImageSuccess, fetchImageFailure } from '../slice/imageSlice.js'

function* fetchImageSaga(){
    try {
        const response = yield call(axios.get,  'http://localhost:3000/static/CV.jpg', {
            responseType: 'blob',
        });
        const imageUrl = URL.createObjectURL(response.data);
        yield put(fetchImageSuccess(imageUrl));
    } catch (e){
        yield put(fetchImageFailure(e.message));
    }
}

export function* watchFetchImageSaga(){
    yield takeLatest(fetchImageRequest.type, fetchImageSaga);
}