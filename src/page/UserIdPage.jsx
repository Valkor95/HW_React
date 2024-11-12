import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {Box, Button, Container, TextField, Typography} from "@mui/material";
import {useTheme} from "../Context.jsx";
import {Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {useDispatch, useSelector} from "react-redux";
import {addUser, updateUser} from "../store/slice/slice.js";
import {setDataUsers} from "../services/StorageService.js";

const UserSchema = Yup.object().shape({
    id: Yup.string().required('Required'),
    name: Yup.string().required('Required'),
    email: Yup.string().email().required('Required')
})

function UserIdPage(props) {
    const {userID} = useParams()
    const { getUserById, updateUserById, darkMode} = useTheme()
    const [isNewUser, setIsNewUser] = useState(!userID)
    const dispatch = useDispatch();
    const {data} = useSelector((state) => state.data)

    const initialUser  = isNewUser ? { id: '', name: '', email: '' } : getUserById(+userID)

    useEffect(() => {
        if (initialUser){
            setIsNewUser(!userID);
        }
    }, [userID]);

    const handleSubmit = (values) => {
        if (isNewUser){
            dispatch(addUser(values))
            setDataUsers([...data, values])
        } else {
            const updatedData = data.map(user => user.id === values.id ? values : user);
            dispatch(updateUser(values))
            setDataUsers(updatedData)
        }
    }


    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '15px'
        }}>
            <Typography variant='subtitle1'>User: {userID || 'New User'}</Typography>
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
                    initialValues={initialUser}
                    onSubmit={handleSubmit}
                    validationSchema={UserSchema}
                    enableReinitialize
                >
                    {({values, errors, touched, setFieldValue }) => (
                        <Form>
                            <Box sx={{ mt: 1 }}>
                                <Field
                                    name="id"
                                    as={TextField}
                                    fullWidth
                                    label="ID"
                                    margin="normal"
                                    variant="outlined"
                                    error={touched.id && Boolean(errors.id)}
                                    helperText={touched.id && errors.id}
                                    onChange={(e) => {
                                        const newId = e.target.value;
                                        setFieldValue("id", newId);
                                        setIsNewUser(!data.some(user => user.id === newId));
                                    }}
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
                                <Button
                                    color={darkMode ? "secondary" : "primary"}
                                    variant={darkMode ? 'outlined' : "contained"}
                                    fullWidth
                                    type="submit"
                                >
                                    {isNewUser ? 'Добавити юзера' : 'Обновити'}
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