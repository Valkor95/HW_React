import React, {useRef, useState} from 'react';
import {Button, TextField} from "@mui/material";
import './style/MainPage.css'
function TodoForm() {
    const input = useRef()

    const submit = (event) => {
        event.preventDefault();
        const todoText = input.current.value.trim()
        if (todoText === '') return;

        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];

        const newTodo = {id: Date.now(), text: todoText}

        localStorage.setItem('todos', JSON.stringify([...savedTodos, newTodo]))

        input.current.value = '';
    }
    return (
        <div>
            <form onSubmit={submit}>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Текст"
                    helperText="Запишіть вашу таску"
                    variant="outlined"
                    margin="normal"
                    inputRef={input}
                />
                <Button type='submit' variant='outlined'>Відправити</Button>
            </form>
        </div>
    );
}

export default TodoForm;