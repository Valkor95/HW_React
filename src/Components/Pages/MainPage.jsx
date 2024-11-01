import React from 'react';
import '../style/MainPage.css'
import {Typography} from "@mui/material";
import TodoForm from "../TodoForm.jsx";
function MainPage(props) {
    return (
        <div className='container'>
            <Typography variant="h3">
                Todo Form
            </Typography>
            <TodoForm className='todoformstyle'/>
        </div>
    );
}

export default MainPage;