import React from 'react';
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import {createTodoRequest, updateTodoRequest} from "../store/slice/todosSlice.js";
import {Box, Button, TextField} from "@mui/material";

function TodoForm({ initialValues = { title: '' }, isEdit = false  }) {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues,
        onSubmit: (values, { resetForm }) => {
            if (isEdit) {
                dispatch(updateTodoRequest(values)); // Если редактируем задачу, отправляем update
            } else {
                dispatch(createTodoRequest(values)); // Если создаем новую задачу, отправляем create
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