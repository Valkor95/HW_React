import React from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {Typography} from "@mui/material";
import TodoForm from "./TodoForm.jsx";

function EditTodo(props) {
    const { id } = useParams();
    const todo = useSelector(state => state.todos.todos.find(todo => todo.id === parseInt(id)));

    if (!todo) return <Typography color="error">Задача не найдена</Typography>;

    return (
        <div>
            <Typography variant="h5" gutterBottom>Редактирование задачи</Typography>

            <TodoForm initialValues={todo} isEdit={true}/>
        </div>
    );
}

export default EditTodo;