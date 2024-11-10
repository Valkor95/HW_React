import React from 'react';
import {useTheme} from "../Context.jsx";
import {Box, Typography} from "@mui/material";
import CardUsers from "./CardUsers.jsx";

function AllUsers(props) {
    const {users, deleteUserId, navigateUserId} = useTheme();
    return (
        <>
            {users && users.length !== 0 ? (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '25px'
                    }}
                >
                    {users.map(user => <CardUsers key={user.id} data={user} onDelete={() => deleteUserId(user.id)} onUpdate={() => navigateUserId(user.id)}/>)}
                </Box>
            ) : (
                <Typography variant='h2'>There are no users!</Typography>
            )}
        </>
    );
}

export default AllUsers;