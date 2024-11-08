import React from 'react';
import {Box, Button} from "@mui/material";
import {useTheme} from "../Context.jsx";

function ButtonDelete(props) {
    const {darkMode, deleteAll} = useTheme()
    return (
        <Box>
            <Button
                variant='contained'
                color={darkMode ? 'warning' : 'error'}
                onClick={deleteAll}
            >Видалити юзерів</Button>
        </Box>
    );
}

export default ButtonDelete;