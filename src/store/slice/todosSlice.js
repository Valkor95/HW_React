import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [],
    loading: false,
    error: null,
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        fetchTodosRequest: (state) => { state.loading = true; },
        fetchTodosSuccess: (state, action) => {
            state.loading = false;
            state.todos = action.payload;
        },
        fetchTodosFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        createTodoRequest: (state) => {
            state.loading = true;
        },
        createTodoSuccess: (state, action) => {
            state.todos.push(action.payload);
            state.loading = false;
        },
        createTodoFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        updateTodoRequest: (state) => { state.loading = true; },
        updateTodoSuccess: (state, action) => {
            state.loading = false;
            const index = state.todos.findIndex(todo => todo.id === action.payload.id);
            if (index !== -1) {
                state.todos[index] = action.payload;
            }
        },
        updateTodoFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        deleteTodoRequest: (state) => { state.loading = true; },
        deleteTodoSuccess: (state, action) => {
            state.loading = false;
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        deleteTodoFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
})

export const {
    fetchTodosRequest, fetchTodosSuccess, fetchTodosFailure,
    updateTodoRequest, updateTodoSuccess, updateTodoFailure,
    deleteTodoRequest, deleteTodoSuccess, deleteTodoFailure,
    createTodoRequest, createTodoSuccess, createTodoFailure
} = todosSlice.actions;

export default todosSlice.reducer;