import React from 'react';
import {useTheme} from "../Context.jsx";
import {Box, Typography} from "@mui/material";
import CardUsers from "./CardUsers.jsx";
import {useDispatch, useSelector} from "react-redux";
import {deleteUser} from "../store/slice/slice.js";

function AllUsers(props) {
    const {navigateUserId} = useTheme();
    const {data} = useSelector((state) => state.data)
    const dispatch = useDispatch();

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
                    {data.map(user => <CardUsers key={user.id} data={user} onUpdate={() => navigateUserId(user.id)} onDelete={() => dispatch(deleteUser(user.id))}/>)}
                </Box>
            ) : (
                <Typography variant='h2'>There are no users!</Typography>
            )}
        </>
    );
}

export default AllUsers;