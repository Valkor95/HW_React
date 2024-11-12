import React, {useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {Box, Button, Container, TextField, Typography} from "@mui/material";
import {useTheme} from "../Context.jsx";
import {Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {useDispatch, useSelector} from "react-redux";

const UserSchema = Yup.object().shape({
    id: Yup.string().required('Required'),
    name: Yup.string().required('Required'),
    email: Yup.string().email().required('Required')
})

function UserIdPage(props) {
    const {userID} = useParams()
    const { getUserById, updateUserById, darkMode} = useTheme()
    const [addSubmitted, setAddSubmitted] = useState(false)
    const dispatch = useDispatch();
    const {data} = useSelector((state) => state.data)

    const user = getUserById(+userID)

    const handleSubmit = (values) => {
        updateUserById(values)
    }
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '15px'
        }}>
            <Typography variant='subtitle1'>User: {userID}</Typography>
            <Container maxWidth="sm" sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Formik
                    initialValues={user}
                    onSubmit={handleSubmit}
                    validationSchema={UserSchema}
                >
                    {({errors, touched}) => (
                        <Form>
                            <Box sx={{ mt: 1 }}>
                                <Field
                                    name="id"
                                    as={TextField}
                                    fullWidth
                                    label="id"
                                    margin="normal"
                                    variant="outlined"
                                    error={touched.id && Boolean(errors.id)}
                                    helperText={touched.id && errors.id}
                                />

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
                                <Button  color={darkMode ? "secondary" : "primary"} variant={darkMode ? 'outlined' : "contained"} fullWidth type="submit">
                                    Обновити
                                </Button>
                                <Button
                                    variant="contained"
                                    color={darkMode ? "warning" : "success"}
                                >
                                    Добавити юзера
                                </Button>
                            </Box>
                        </Form>
                    )}
                </Formik>
            </Container>


        </Box>
    );
}

export default UserIdPage;