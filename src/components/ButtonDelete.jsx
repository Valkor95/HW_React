import React from 'react';
import {Box, Button} from "@mui/material";
import {useTheme} from "../Context.jsx";

function ButtonDelete(props) {
    const {darkMode, deleteAll} = useTheme()
    return (

            <Button
                variant='contained'
                color={darkMode ? 'warning' : 'error'}
                onClick={deleteAll}
                fullWidth
            >Видалити всіх</Button>

    );
}

export default ButtonDelete;