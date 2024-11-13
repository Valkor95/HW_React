import React, {useState} from 'react';
import {AppBar, BottomNavigation, Box, Button, Toolbar, Typography} from "@mui/material";
import {useTheme} from "../Context.jsx";
import {NavLink} from "react-router-dom";
import RestoreIcon from "@mui/icons-material/Restore";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import CreateNewUser from "../page/CreateNewUser.jsx";

function Header(props) {
    const {darkMode, toggleTheme} = useTheme();
    const [value, setValue] = useState(0);
    return (
        <AppBar position="static">
            <Toolbar>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center',  }}>
                    <Typography variant="h6" component="div" >
                        Header
                    </Typography>

                        <BottomNavigation
                            showLabels
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            sx={{ marginLeft: 2, flexGrow: 1,  height: 65,}}
                        >
                            <BottomNavigationAction
                                component={NavLink}
                                to='/home'
                                label="Головна"
                                icon={<RestoreIcon />}
                                sx={{
                                    '&:focus': {
                                        color: darkMode ? '#A44FB3FF' : '',
                                    },
                                }}
                            />
                            <BottomNavigationAction
                                component={NavLink}
                                to='/addNewUser'
                                label="User+"
                                icon={<RestoreIcon />}
                                sx={{
                                    '&:focus': {
                                        color: darkMode ? '#A44FB3FF' : '',
                                    },
                                }}
                            />
                        </BottomNavigation>
                    </Box>

                    <Box>
                        <Button variant='outlined' color={darkMode ? "secondary" : ""} onClick={toggleTheme}>
                            Включити {darkMode ? 'cвітлу' : 'темну'} тему
                        </Button>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;