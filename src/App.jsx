import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import MainPage from "./Components/Pages/MainPage.jsx";
import ContactsPage from "./Components/Pages/ContactsPage.jsx";
import AboutPage from "./Components/Pages/AboutPage.jsx";
import Header from "./Components/Header.jsx";
import {useState} from "react";
import {Button, createTheme, ThemeProvider} from "@mui/material";
import Box from "@mui/material/Box";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light', // Выбор режима на основе состояния
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header/>
                <Box sx={{mt: 7}}>
                    <Button onClick={toggleTheme} variant="contained" style={{ margin: '16px' }}>
                        Переключить на {darkMode ? 'светлую' : 'темную'} тему
                    </Button>
                </Box>


                <Routes>
                    <Route path='/' element={<Navigate to='/home' replace />} />
                    <Route path='/home' element={<MainPage/>}/>
                    <Route path='/contact' element={<ContactsPage/>}/>
                    <Route path='/about' element={<AboutPage/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;