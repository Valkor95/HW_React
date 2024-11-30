import React from 'react';
import ImageComponent from "./components/ImageComponent.jsx";
import Navigation from "./components/Navigation.jsx";
import Routers from "./components/Routers.jsx";
import {Container} from "@mui/material";

const App = () => {
    return (
        <div>
            <Container sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
            }}>
                <Navigation/>
                <Routers/>
            </Container>

        </div>
    );
};

export default App;