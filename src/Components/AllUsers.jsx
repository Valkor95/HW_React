import React from 'react';
import {useTheme} from "../Context.jsx";
import {Box, Typography} from "@mui/material";
import CardUsers from "./CardUsers.jsx";
import ButtonsUpdateDelete from "./ButtonsUpdateDelete.jsx";

function AllUsers(props) {
    const {users, setUsers} = useTheme();

    return (
        <>
            {users ? (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <CardUsers data={users}/>
                    <ButtonsUpdateDelete/>
                </Box>
            ) : (
                <Typography variant='h2' alignItems='center'>There are no users!</Typography>
            )}
        </>
    );
}

export default AllUsers;