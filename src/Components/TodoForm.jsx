import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";
import './style/MainPage.css'
function TodoForm(props) {
    const [todoValue, setTodoValue] = useState({})

    const submit = (event) => {
        event.preventDefault();
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
                />
                <Button type='submit' variant='outlined'>Відправити</Button>
            </form>
        </div>
    );
}

export default TodoForm;