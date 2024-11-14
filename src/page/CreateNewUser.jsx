import React from 'react';
import {useTheme} from "../Context.jsx";
import {useDispatch, useSelector} from "react-redux";
import {addUser} from "../store/slice/slice.js";
import {Box, Button, Container, TextField, Typography} from "@mui/material";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {getDataUsers, newIdUser, setDataUsers} from "../services/StorageService.js";

const UserSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email().required('Required')
})
function CreateNewUser(props) {
    const { darkMode} = useTheme()
    const dispatch = useDispatch();
    const {data} = useSelector((state) => state.data)

    const initialValues = {name: '', email: ''}
    const handleSubmit = (values) => {
        console.log(values)
        dispatch(addUser(values))
        const newId = newIdUser();
        const newUser = { id: newId, ...values };
        const currentData = getDataUsers() || [];
        const updatedData = [...currentData, newUser];
        setDataUsers(updatedData);
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '15px'
        }}>
            <Typography variant='subtitle1'>User:'New User'</Typography>
            <Container
                maxWidth="sm"
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={UserSchema}
                    enableReinitialize
                >
                    {({values, errors, touched, setFieldValue }) => (
                        <Form>
                            <Box sx={{ mt: 1 }}>
                                <Field
                                    name="name"
                                    as={TextField}
                                    fullWidth
                                    label="Ім'я"
                                    margin="normal"
                                    variant="outlined"
                                    error={touched.name && Boolean(errors.name)}
                                    helperText={touched.name && errors.name}
                                />

                                <Field
                                    name="email"
                                    as={TextField}
                                    fullWidth
                                    label="email"
                                    margin="normal"
                                    variant="outlined"
                                    error={touched.email && Boolean(errors.email)}
                                    helperText={touched.email && errors.email}
                                />
                            </Box>
                            <Box
                                sx={{
                                    maxWidth: '50%',
                                    margin: '0 auto',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '20px',
                                    mt: 2
                                }}
                            >
                                <Button
                                    color={darkMode ? "secondary" : "primary"}
                                    variant={darkMode ? 'outlined' : "contained"}
                                    fullWidth
                                    type="submit"
                                >
                                    Додати
                                </Button>
                            </Box>
                        </Form>
                    )}
                </Formik>
            </Container>
        </Box>
    );
}

export default CreateNewUser;