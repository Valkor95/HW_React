import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";
import './style/MainPage.css'
function TodoForm(props) {
    const [todoValue, setTodoValue] = useState({})
    return (
        <div>
            <form >
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