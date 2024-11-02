import React from 'react';
import {Container, Typography} from "@mui/material";
import TodoForm from "../TodoForm.jsx";
import Box from "@mui/material/Box";
function MainPage(props) {
    return (
        <div>
            <Container sx={{height: '100vh'}}>
                <Box sx={{py:10, display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                    <Typography variant="h3">
                        Todo Form
                    </Typography>
                    <TodoForm className='todoformstyle'/>
                </Box>

            </Container>

        </div>
    );
}

export default MainPage;