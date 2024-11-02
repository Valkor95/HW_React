import React, {useEffect, useState} from 'react';
import {Container, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import AboutMe from "../AboutMe.jsx";

function AboutPage(props) {
    const [info, setInfo] = useState(null)

    useEffect(() => {
        const fetchUserData = async () => {
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
                const data = await response.json();
                setInfo(data)
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
                    Про мене
                </Typography>
                <Box sx={{my:2, display: 'flex', justifyContent: 'flex-start', flexDirection: 'column'}}>
                    {info && <AboutMe info={info}/>}
                </Box>
            </Box>
        </Container>
    );
}

export default AboutPage;