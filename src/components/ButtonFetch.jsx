import React, {useEffect} from 'react';
import {Box, Button} from "@mui/material";
import {useTheme} from "../Context.jsx";
import {getDataUsers, setDataUsers} from "../services/StorageService.js";
import {useDispatch, useSelector} from "react-redux";
import {addUser} from "../store/slice/slice.js";

function ButtonFetch(props) {
    const {darkMode} = useTheme()
    const dispatch = useDispatch();
    const {data} = useSelector((state) => state.data)

    const fetchData = async () => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const result = await response.json()
            const quantity = +prompt('Скількі юзерів ви бажаєте викликати? (1-10)')
            const selectedUsers = result.slice(0, quantity);
            dispatch(addUser(selectedUsers))
            setDataUsers(selectedUsers);
        } catch (e){
            console.error('Помилка при отримані даних:', e);
        }
    }


    return (
        <Box>
            <Button
                variant='contained'
                color={darkMode ? 'secondary' : 'primary'}
                onClick={() => fetchData()}
            >Виклик даних</Button>
        </Box>
    );
}

export default ButtonFetch;