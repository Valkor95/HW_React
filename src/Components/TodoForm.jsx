import React, {useRef, useState} from 'react';
import {Button, TextField} from "@mui/material";
import './style/MainPage.css'
import {useTheme} from "../ThemeContext.jsx";
function TodoForm({ addTodo }) {
    const input = useRef()
    const { darkMode } = useTheme();

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

                    variant="outlined"
                    margin="normal"
                    inputRef={input}
                    InputLabelProps={{
                        style: {
                            color: darkMode ? '#A44FB3FF' : '#000000',
                        },
                    }}
                    FormHelperTextProps={{
                        style: {
                            color: darkMode ? '#A44FB3FF' : '#000000',
                        },
                    }}
                    helperText="Запишіть вашу таску"
                    sx={{
                        backgroundColor: darkMode ? '#424242' : '#ffffff',
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: darkMode ? '#A44FB3FF' : '#000000',
                            },
                            '&:hover fieldset': {
                                borderColor: darkMode ? '#A44FB3FF' : '#000000',
                            },
                        },
                    }}
                />
                <Button color={darkMode ? "secondary" : "primary"} type='submit' variant='outlined'>Записати</Button>
            </form>
        </div>
    );
}

export default TodoForm;