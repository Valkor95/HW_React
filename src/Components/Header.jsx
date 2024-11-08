import React from 'react';
import {AppBar, Toolbar, Typography} from "@mui/material";

function Header(props) {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Header
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;