import {call, put, takeLatest, all} from 'redux-saga/effects';
import axios from "axios";
import {fetchSWDataRequest, fetchSWDataSuccess, fetchSWDataFailure} from '../slice/SWstate.js'

const HOST = 'https://swapi.dev/api/'

function* fetchDataSaga(url, successAction){
    try {
        const response = yield call(axios.get, `${HOST}${url}`);
        yield put(successAction(response.data.results));
    } catch (e){
        yield put(fetchSWDataFailure(e.message));
    }
}

function* fetchDataPlanetsSaga(){
    yield fetchDataSaga('planets', fetchSWDataSuccess)
}

export function* watchFetchSWSaga(){
    yield all([
        takeLatest(fetchSWDataRequest, fetchDataPlanetsSaga),
    ])
}