import React from 'react';
import {useTheme} from "../Context.jsx";
import {Box, Typography} from "@mui/material";
import CardUsers from "./CardUsers.jsx";
import {useSelector} from "react-redux";

function AllUsers(props) {
    const {deleteUserId, navigateUserId} = useTheme();
    const {data} = useSelector((state) => state.data)

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
                    {data.map(user => <CardUsers key={user.id} data={user} onDelete={() => deleteUserId(user.id)} onUpdate={() => navigateUserId(user.id)}/>)}
                </Box>
            ) : (
                <Typography variant='h2'>There are no users!</Typography>
            )}
        </>
    );
}

export default AllUsers;