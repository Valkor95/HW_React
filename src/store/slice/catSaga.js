import {call, put, takeEvery} from 'redux-saga/effects';

function* workGetCatsFetch(){
    const cats = yield call(() => fetch('https://api.thecatapi.com/v1/breeds'))
}
function* catSaga(){
    yield takeEvery('cats/getCatsFetch', workGetCatsFetch);
}