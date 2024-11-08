import React from 'react';
import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import {useTheme} from "../ContextTheme.jsx";

function Header(props) {
    const {darkMode, toggleTheme} = useTheme()
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Header
                </Typography>
                <Button variant='outlined' color={darkMode ? "secondary" : ""} onClick={toggleTheme}>
                    Включити {darkMode ? 'cвітлу' : 'темну'} тему
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;