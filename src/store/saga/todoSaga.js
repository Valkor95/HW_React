import { call, put, takeLatest, all} from 'redux-saga/effects';

import {
    fetchTodosRequest, fetchTodosSuccess, fetchTodosFailure,
    updateTodoRequest, updateTodoSuccess, updateTodoFailure,
    deleteTodoRequest, deleteTodoSuccess, deleteTodoFailure, createTodoSuccess, createTodoFailure, createTodoRequest
} from '../slice/todosSlice.js'

import { getTodos, updateTodo, deleteTodo, createTodo } from '../api/api.js'

function* fetchTodosSaga() {
    try {
        const todos = yield call(getTodos);
        yield put(fetchTodosSuccess(todos));
    } catch (error) {
        yield put(fetchTodosFailure(error.message));
    }
}

function* createTodoSaga(action) {
    try {
        const response = yield call(createTodo, action.payload);
        yield put(createTodoSuccess(response.data));
    } catch (error) {
        yield put(createTodoFailure(error.message));
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
        takeLatest(createTodoRequest.type, createTodoSaga),
        takeLatest(updateTodoRequest.type, updateTodoSaga),
        takeLatest(deleteTodoRequest.type, deleteTodoSaga),
    ])
}
