import React from 'react';
import ImageComponent from "./components/ImageComponent.jsx";
import Navigation from "./components/Navigation.jsx";
import Routers from "./components/Routers.jsx";
import {Container} from "@mui/material";

const App = () => {
    return (
        <div>
            <Navigation/>
            <Container sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px'
            }}>
                <Routers/>
            </Container>

        </div>
    );
};

export default App;