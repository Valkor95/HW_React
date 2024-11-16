import React from 'react';
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import MainPage from "./pages/MainPage.jsx";
import {BrowserRouter} from "react-router-dom";
import Routers from "./routes/Routers.jsx";
import {Provider} from "react-redux";
import {store} from './store/store.js'

function App(props) {
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        }
    });

    return (
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider theme={darkTheme}>
                    <CssBaseline/>
                    <Routers/>
                </ThemeProvider>
            </BrowserRouter>
        </Provider>


    );
}

export default App;