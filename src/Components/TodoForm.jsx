import React, {useRef, useState} from 'react';
import {Button, TextField} from "@mui/material";
import './style/MainPage.css'
function TodoForm({ addTodo }) {
    const input = useRef()

    const submit = (event) => {
        event.preventDefault();
        const newTodo = {
            id: Date.now(),
            text: input.current.value,
        };
        addTodo(newTodo);
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
                <Button type='submit' variant='outlined'>Записати</Button>
            </form>
        </div>
    );
}

export default TodoForm;