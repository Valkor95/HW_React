import React from 'react';
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import MainPage from "./pages/MainPage.jsx";

function App(props) {
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        }
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <MainPage/>
        </ThemeProvider>
    );
}

export default App;