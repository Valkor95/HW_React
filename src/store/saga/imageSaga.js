import {call, put, takeLatest, all} from 'redux-saga/effects';
import axios from "axios";
import { fetchImageCVRequest, fetchImageSWRequest, fetchImageCVSuccess, fetchImageSWSuccess, fetchImageFailure } from '../slice/imageSlice.js'

const HOST = 'http://localhost:3000/static/'
function* fetchImageSaga(url, successAction){
    try {
        const response = yield call(axios.get, `${HOST}${url}`, {
            responseType: 'blob',
        });
        const imageUrl = URL.createObjectURL(response.data);
        yield put(successAction(imageUrl));
    } catch (e){
        yield put(fetchImageFailure(e.message));
    }
}

function* fetchImageCVSaga(){
    yield*  fetchImageSaga('CV.jpg', fetchImageCVSuccess)
}

function* fetchImageSWSaga(){
    yield* fetchImageSaga('SWimg.png', fetchImageSWSuccess)
}

export function* watchFetchImageSaga(){
    yield all([
        takeLatest(fetchImageCVRequest.type, fetchImageCVSaga),
        takeLatest(fetchImageSWRequest.type, fetchImageSWSaga)
    ])
}