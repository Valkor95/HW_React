import React from 'react';
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import {createTodoRequest, updateTodoRequest} from "../store/slice/todosSlice.js";
import {Box, Button, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";

function TodoForm({ initialValues = { title: '' }, isEdit = false  }) {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues,
        onSubmit: (values, { resetForm }) => {
            if (isEdit) {
                dispatch(updateTodoRequest(values));
                navigate('/todolist')
            } else {
                dispatch(createTodoRequest(values));
            }
            resetForm();
        },
    });
    return (
        <Box
            component="form"
            onSubmit={formik.handleSubmit}
            sx={{ display: 'flex', gap: 2, mb: 3 }}
        >
            <TextField
                name="title"
                label="Введите название задачи"
                value={formik.values.title}
                onChange={formik.handleChange}
                fullWidth
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
            >
                {isEdit ? 'Обновить' : 'Добавить'}
            </Button>
        </Box>
    );
}

export default TodoForm;