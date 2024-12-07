import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchTodosRequest} from "../store/slice/todosSlice.js";
import {CircularProgress, Grid, Typography} from "@mui/material";
import TodoForm from "../components/TodoForm.jsx";
import TodoItem from "../components/TodoItem.jsx";

function Todolist(props) {
    const dispatch = useDispatch();
    const { todos, loading, error } = useSelector(state => state.todos);

    useEffect(() => {
        dispatch(fetchTodosRequest());
    }, [dispatch]);

    if (loading) return <CircularProgress />;
    if (error) return <Typography color="error">Ошибка: {error}</Typography>;

    return (
        <Grid container spacing={3} sx={{ p: 3 }}>
            <Grid item xs={12}>
                <Typography variant="h4" gutterBottom>Todo List</Typography>
            </Grid>

            <Grid item xs={12}>
                <TodoForm refreshTodos={() => dispatch(fetchTodosRequest())}/>
            </Grid>

            <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>Список задач</Typography>
            </Grid>

            {todos && todos.map(todo => (
                todo && todo.id ? (
                        <Grid item xs={12} sm={6} md={4} key={todo.id}>
                            <TodoItem todo={todo} />
                        </Grid>
                    ) : null
            ))}
        </Grid>
    );
}

export default Todolist;