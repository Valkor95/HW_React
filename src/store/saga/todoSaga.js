import { call, put, takeLatest } from 'redux-saga/effects';

import {
    fetchTodosRequest, fetchTodosSuccess, fetchTodosFailure,
    updateTodoRequest, updateTodoSuccess, updateTodoFailure,
    deleteTodoRequest, deleteTodoSuccess, deleteTodoFailure
} from '../slice/todosSlice.js'

