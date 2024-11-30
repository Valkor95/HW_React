import React, {useState} from 'react';
import {AppBar, Tab, Tabs, Toolbar} from "@mui/material";
import {Link} from "react-router-dom";

function Navigation(props) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const navLinks = [
        { label: 'CV', to: '/' },
        { label: 'Список дел', to: '/todolist' },
        { label: 'SWAPI', to: '/swapi' },
    ];

    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Tabs
                   value={value}
                   onChange={handleChange}
                   textColor="inherit"
                   indicatorColor="secondary"
                >
                    {navLinks.map((link, index) => (
                        <Tab key={index} label={link.label} component={Link} to={link.to}/>
                    ))}
                </Tabs>
            </Toolbar>
        </AppBar>
    );
}

export default Navigation;