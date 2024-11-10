import React from 'react';
import {Link, useParams} from "react-router-dom";
import {Box, Button, Typography} from "@mui/material";
import {useTheme} from "../Context.jsx";

function UserIdPage(props) {
    const {userID} = useParams()
    const {getUserById, darkMode} = useTheme()

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '15px'
        }}>
            <Typography variant='subtitle1'>User: {userID}</Typography>

            <Button
                sx={{ maxWidth: '50%'}}
                component={Link}
                to="/home"
                variant="contained"
                color={darkMode ? "secondary" : "primary"}
            >
                Back to main menu</Button>
        </Box>
    );
}

export default UserIdPage;