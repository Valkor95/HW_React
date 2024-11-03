import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import MainPage from "./Components/Pages/MainPage.jsx";
import ContactsPage from "./Components/Pages/ContactsPage.jsx";
import AboutPage from "./Components/Pages/AboutPage.jsx";
import Header from "./Components/Header.jsx";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { ThemeProvider, useTheme } from './ThemeContext.js';

function App() {
    const { darkMode } = useTheme();
    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
    });
    return (
        <MuiThemeProvider theme={theme}>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element={<Navigate to='/home' replace />} />
                    <Route path='/home' element={<MainPage/>}/>
                    <Route path='/contact' element={<ContactsPage/>}/>
                    <Route path='/about' element={<AboutPage/>}/>
                </Routes>
            </BrowserRouter>
        </MuiThemeProvider>
    );
}

export default App;