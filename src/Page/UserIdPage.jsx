import React from 'react';
import {Link, useParams} from "react-router-dom";
import {Box, Button, Container, TextField, Typography} from "@mui/material";
import {useTheme} from "../Context.jsx";
import {Field, Form, Formik} from "formik";
import * as Yup from 'yup';

const UserSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email().required('Required')
})

function UserIdPage(props) {
    const {userID} = useParams()
    const {getUserById, darkMode} = useTheme()

    const user = getUserById(userID)

    const handleSubmit = (values) => {
        console.log(values)

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
                                sx={{ maxWidth: '50%', margin: '0 auto'}}
                            >
                                <Button  color={darkMode ? "secondary" : "primary"} variant="contained" fullWidth type="submit" sx={{ mt: 2 }}>
                                    Відправити
                                </Button>
                            </Box>

                        </Form>
                    )}
                </Formik>
            </Container>

            <Button
                sx={{ maxWidth: '50%', margin: '0 auto'}}
                component={Link}
                to="/home"
                variant="contained"
                color={darkMode ? "secondary" : "primary"}
            >
                Повернутися до меню</Button>
        </Box>
    );
}

export default UserIdPage;