import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import {Container, Typography} from "@mui/material";
import TodoForm from "../TodoForm.jsx";
import TodoList from "../TodoList.jsx";
import CardContacts from "../CardContacts.jsx";

function ContactsPage(props) {
    const [contact, setContact] = useState(null)

    useEffect(() => {
        const fetchUserData = async () => {
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
                const data = await response.json();
                setContact(data)
            } catch (e){
                console.error("Ошибка при загрузке данных:", error);
            }
        };

        fetchUserData()
    }, []);

    return (
        <Container sx={{height: '100vh'}}>
            <Box sx={{py:10, display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                <Typography variant="h3">
                    Контакти
                </Typography>
                <Box sx={{my:2, display: 'flex', justifyContent: 'flex-start', flexDirection: 'column'}}>
                    {contact && <CardContacts user={contact}/>}
                </Box>
            </Box>
        </Container>
    );
}

export default ContactsPage;