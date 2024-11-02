import React, {useEffect, useState} from 'react';
import {Container, Typography} from "@mui/material";
import TodoForm from "../TodoForm.jsx";
import Box from "@mui/material/Box";
import TodoList from "../TodoList.jsx";
function MainPage(props) {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(savedTodos);
    }, []);

    const addTodo = (newTodo) => {
        const updatedTodos = [...todos, newTodo];
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    };

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    };

    return (
            <Container sx={{height: '100vh'}}>
                <Box sx={{py:10, display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                    <Typography variant="h3">
                        Todo Form
                    </Typography>
                    <TodoForm addTodo={addTodo}/>
                    <Box sx={{my: 2, display: 'flex', justifyContent: 'center'}}>
                        <TodoList todos={todos} deleteTodo={deleteTodo}/>
                    </Box>
                </Box>
            </Container>
    );
}

export default MainPage;