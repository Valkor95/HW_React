import React from 'react';
import {Box, Button} from "@mui/material";
import {useTheme} from "../Context.jsx";

function ButtonFetch(props) {
    const {darkMode} = useTheme()
    return (
        <Box>
            <Button variant='contained' color={darkMode ? 'secondary' : 'primary'}>Виклик даних</Button>
        </Box>
    );
}

export default ButtonFetch;