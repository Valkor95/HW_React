import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import MainPage from "./Components/Pages/MainPage.jsx";
import ContactsPage from "./Components/Pages/ContactsPage.jsx";
import AboutPage from "./Components/Pages/AboutPage.jsx";
import Header from "./Components/Header.jsx";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { ThemeProvider} from './ThemeContext.jsx';
import AppRoutes from "./Components/AppRoutes.jsx";

function App() {

    return (
        <ThemeProvider>
            <AppRoutes />
        </ThemeProvider>
    );
}

export default App;