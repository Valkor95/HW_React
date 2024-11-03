import React, {useState} from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {NavLink} from "react-router-dom";
import {AppBar, Button, Container, Stack} from "@mui/material";
import {useTheme} from "../ThemeContext.jsx";

export default function SimpleBottomNavigation() {
    const [value, setValue] = useState(0);
    const { darkMode, toggleTheme } = useTheme();

    return (
        <AppBar>
            <Container>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ py: 1 }}
                >
                    <Box sx={{ width: 500 }}>
                    <BottomNavigation
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
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
                            to='/contact'
                            label="Контакти"
                            icon={<LocationOnIcon />}
                            sx={{
                                '&:focus': {
                                    color: darkMode ? '#A44FB3FF' : '',
                                },
                            }}
                        />
                        <BottomNavigationAction
                            component={NavLink}
                            to='/about'
                            label="Про мене"
                            icon={<FavoriteIcon />}
                            sx={{
                                '&:focus': {
                                    color: darkMode ? '#A44FB3FF' : '',
                                },
                            }}
                        />
                    </BottomNavigation>
                    </Box>
                        <Button variant='outlined' color={darkMode ? "secondary" : ""} onClick={toggleTheme}>
                            Включити {darkMode ? 'cвітлу' : 'темну'} тему
                        </Button>
                    </Stack>
            </Container>
        </AppBar>
    );
}