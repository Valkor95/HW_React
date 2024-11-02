import React, {useState} from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {NavLink} from "react-router-dom";
import {AppBar, Container, Stack} from "@mui/material";

export default function SimpleBottomNavigation() {
    const [value, setValue] = useState(0);

    return (
        <AppBar>
            <Container>
                <Box sx={{ width: 500 }}>
                    <BottomNavigation
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    >
                        <BottomNavigationAction component={NavLink} to='/home' label="Головна" icon={<RestoreIcon />} />
                        <BottomNavigationAction component={NavLink} to='/contact' label="Контакти" icon={<LocationOnIcon />}/>
                        <BottomNavigationAction component={NavLink} to='/about' label="Про мене" icon={<FavoriteIcon />}/>
                    </BottomNavigation>
                </Box>
            </Container>

        </AppBar>
    );
}