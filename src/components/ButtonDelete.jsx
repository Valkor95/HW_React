import React from 'react';
import {Box, Button} from "@mui/material";
import {useTheme} from "../Context.jsx";
import {useDispatch} from "react-redux";
import {deleteAllUser} from "../store/slice/slice.js";

function ButtonDelete(props) {
    const {darkMode} = useTheme()
    const dispatch = useDispatch()

    const handleDeleteAll = () => {
        localStorage.clear();
        dispatch(deleteAllUser());
    };

    return (

            <Button
                variant='contained'
                color={darkMode ? 'warning' : 'error'}
                onClick={handleDeleteAll}
                fullWidth
            >Видалити всіх</Button>

    );
}

export default ButtonDelete;