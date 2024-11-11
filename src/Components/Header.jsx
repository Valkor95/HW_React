import React, {useState} from 'react';
import {AppBar, BottomNavigation, Button, Toolbar, Typography} from "@mui/material";
import {useTheme} from "../Context.jsx";

function Header(props) {
    const {darkMode, toggleTheme} = useTheme();
    const [value, setValue] = useState(0);
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Header
                </Typography>
                <BottomNavigation

                >

                </BottomNavigation>
                <Button variant='outlined' color={darkMode ? "secondary" : ""} onClick={toggleTheme}>
                    Включити {darkMode ? 'cвітлу' : 'темну'} тему
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;