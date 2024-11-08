import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import {Link} from "react-router-dom";

function Page404() {
    return (
        <Box sx={{display: 'flex', justifyContent: 'center',  alignItems: 'center',
            minHeight: '100vh', flexDirection: 'column',}}>
            <Typography variant='h2' align="center">Not found!</Typography>
            <Button component={Link} to="/home" variant="contained">Back to main menu</Button>
        </Box>
    );
}

export default Page404;