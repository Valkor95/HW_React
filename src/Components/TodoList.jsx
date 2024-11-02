import React, {useEffect, useState} from 'react';
import {IconButton, List, ListItem, ListItemSecondaryAction, ListItemText} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
function TodoList({ todos, deleteTodo }) {

    return (
        <List>
            {todos.map((todo) => (
                <ListItem key={todo.id} divider>
                    <ListItemText primary={`${todo.id} || ${todo.text}`} />
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    );
}

export default TodoList;