import React, {useEffect} from 'react';
import {Box, Button, CircularProgress} from "@mui/material";
import {useTheme} from "../Context.jsx";
import {getDataUsers, setDataUsers} from "../services/StorageService.js";
import {useDispatch, useSelector} from "react-redux";
import {addUser, fetchUsers} from "../store/slice/slice.js";

function ButtonFetch(props) {
    const {darkMode} = useTheme()
    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state) => state.data)

    const fetchData = async () => {
        try{
            const quantity = +prompt('Скількі юзерів ви бажаєте викликати? (1-10)')
            if (quantity >= 1 && quantity <= 10) {
                dispatch(fetchUsers(quantity));
            } else {
                alert('Введіть коректну кількість (від 1 до 10)');
            }
        } catch (e){
            console.error('Помилка при отримані даних:', e);
        }
    }

    useEffect(() => {
        const savedUsers = getDataUsers();
        if (savedUsers){
            dispatch(fetchUsers(savedUsers.length))
        } else {
            fetchData()
        }
    }, [dispatch]);


    return (
        <Box>
            <Button
                variant='contained'
                color={darkMode ? 'secondary' : 'primary'}
                onClick={fetchData}
                disabled={loading}
            >
                {loading ? <CircularProgress size={24} /> : 'Виклик даних'}
            </Button>
            {error && <div style={{ color: 'red' }}>Помилка: {error}</div>}
        </Box>
    );
}

export default ButtonFetch;