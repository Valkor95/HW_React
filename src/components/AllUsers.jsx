import React, {useEffect} from 'react';
import {useTheme} from "../Context.jsx";
import {Box, Typography} from "@mui/material";
import CardUsers from "./CardUsers.jsx";
import {useDispatch, useSelector} from "react-redux";
import {deleteUser} from "../store/slice/slice.js";
import {useNavigate} from "react-router-dom";
import {navigateUserId, setDataUsers} from "../services/StorageService.js";

function AllUsers(props) {
    const {data} = useSelector((state) => state.data)
    const dispatch = useDispatch();
    const navigate = useNavigate()


    const handleDeleteUser = (id) => {
        dispatch(deleteUser(id));
    }

    useEffect(() => {
        setDataUsers(data);
    }, [data]);

    return (
        <>
            {data ? (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '25px'
                    }}
                >
                    {data.map(user => <CardUsers key={user.id} data={user} onUpdate={() => navigateUserId(navigate, user.id)} onDelete={() => handleDeleteUser(user.id)}/>)}
                </Box>
            ) : (
                <Typography variant='h2'>There are no users!</Typography>
            )}
        </>
    );
}

export default AllUsers;