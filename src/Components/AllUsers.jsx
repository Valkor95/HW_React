import React from 'react';
import {useTheme} from "../Context.jsx";
import {Box, Typography} from "@mui/material";
import CardUsers from "./CardUsers.jsx";

function AllUsers(props) {
    const {users, deleteUserId} = useTheme();
    return (
        <>
            {users ? (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '25px'
                    }}
                >
                    {users.map(user => <CardUsers key={user.id} data={user} onDelete={() => deleteUserId(user.id)}/>)}
                </Box>
            ) : (
                <Typography variant='h2'>There are no users!</Typography>
            )}
        </>
    );
}

export default AllUsers;