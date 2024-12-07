import { call, put, takeLatest, all} from 'redux-saga/effects';

import {
    fetchTodosRequest, fetchTodosSuccess, fetchTodosFailure,
    updateTodoRequest, updateTodoSuccess, updateTodoFailure,
    deleteTodoRequest, deleteTodoSuccess, deleteTodoFailure
} from '../slice/todosSlice.js'

import { getTodos, updateTodo, deleteTodo } from '../api/api.js'

function* fetchTodosSaga() {
    try {
        const todos = yield call(getTodos);
        yield put(fetchTodosSuccess(todos));
    } catch (error) {
        yield put(fetchTodosFailure(error.message));
    }
}

function* updateTodoSaga(action) {
    try {
        const updatedTodo = yield call(updateTodo, action.payload);
        yield put(updateTodoSuccess(updatedTodo));
    } catch (error) {
        yield put(updateTodoFailure(error.message));
    }
}

function* deleteTodoSaga(action) {
    try {
        yield call(deleteTodo, action.payload);
        yield put(deleteTodoSuccess(action.payload));
    } catch (error) {
        yield put(deleteTodoFailure(error.message));
    }
}

export function* watchFetchTodosSaga(){
    yield all([
        takeLatest(fetchTodosRequest.type, fetchTodosSaga),
        takeLatest(updateTodoRequest.type, updateTodoSaga),
        takeLatest(deleteTodoRequest.type, deleteTodoSaga),
    ])
}
