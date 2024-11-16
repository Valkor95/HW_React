import React from 'react';
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import MainPage from "./pages/MainPage.jsx";
import {BrowserRouter} from "react-router-dom";
import Routers from "./routes/Routers.jsx";

function App(props) {
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        }
    });

    return (
        <BrowserRouter>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline/>
                <Routers/>
            </ThemeProvider>
        </BrowserRouter>

    );
}

export default App;