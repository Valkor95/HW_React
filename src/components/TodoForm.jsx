import React from 'react';
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import * as Yup from 'yup';
import {createTodoRequest, updateTodoRequest} from "../store/slice/todosSlice.js";
import {Box, Button, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";

const validationSchema = Yup.object({
    title: Yup.string()
        .matches(/^[a-zA-Z0-9 ]*$/, "Можно вводить только буквы, цифры и пробелы")
        .required("Поле не может быть пустым")
        .min(3, "Минимум 3 символа")
});

function TodoForm({ initialValues = { title: '' }, isEdit = false, refreshTodos,  }) {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            if (isEdit) {
                dispatch(updateTodoRequest(values));
                navigate('/todolist')
            } else {
                dispatch(createTodoRequest(values));
                refreshTodos();
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
                onBlur={formik.handleBlur}
                fullWidth
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={!formik.isValid || formik.isSubmitting}
            >
                {isEdit ? 'Обновить' : 'Добавить'}
            </Button>
        </Box>
    );
}

export default TodoForm;