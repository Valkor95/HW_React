import React from 'react';
import {useDispatch} from "react-redux";
import {deleteTodoRequest} from "../store/slice/todosSlice.js";
import {Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {Link} from "react-router-dom";

function TodoItem({todo}) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTodoRequest(todo.id));
    };

    return (
        <Card variant="outlined" sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    {todo.title}
                </Typography>

                <Box>
                    <Link to={`/todolist/${todo.id}`} style={{ textDecoration: 'none' }}>
                        <Button variant="outlined" color="primary" size="small">
                            Редактировать
                        </Button>
                    </Link>
                </Box>
            </CardContent>

            <CardActions>
                <Button
                    onClick={handleDelete}
                    variant="contained"
                    color="error"
                    size="small"
                >
                    Удалить
                </Button>
            </CardActions>
        </Card>
    );
}

export default TodoItem;