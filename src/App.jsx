import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import MainPage from "./Components/Pages/MainPage.jsx";
import ContactsPage from "./Components/Pages/ContactsPage.jsx";
import AboutPage from "./Components/Pages/AboutPage.jsx";
import Header from "./Components/Header.jsx";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { ThemeProvider} from './ThemeContext.jsx';
import AppRoutes from "./Components/AppRoutes.jsx";
import {ErrorBoundary} from "react-error-boundary";

function App() {

    function MyFallBackComponent(){
        return <div>ERROR!Something is wrong!</div>
    }
    return (
        <ErrorBoundary
            FallbackComponent={MyFallBackComponent}
            onError={(error, errorInfo) => console.log({error, errorInfo})}
        >
            <ThemeProvider>
                <AppRoutes />
            </ThemeProvider>
        </ErrorBoundary>

    );
}

export default App;