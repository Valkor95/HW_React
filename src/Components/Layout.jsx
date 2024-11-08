import React from 'react';
import {AppBar, Box, Container, createTheme, ThemeProvider, Toolbar, Typography} from "@mui/material";
import Grid from '@mui/material/Grid2';
import Header from "./Header.jsx";
import Routes from "./Routes.jsx";
import {useTheme} from "../ContextTheme.jsx";

function Layout(props) {
    const { darkMode } = useTheme();

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            background: {
                default: darkMode ? '#303030' : '#ffffff',
            }
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Header/>

                <Container maxWidth="lg" sx={{ flex: 1, my: 4 }}>
                    <Grid
                        container
                        spacing={3}
                        sx={{ minHeight: '100vh' }}
                        justifyContent='center'
                        alignItems="flex-start"
                    >
                        <Grid size={{ xs: 12, md: 3 }}>
                            <Box sx={{ bgcolor: 'grey.200', p: 2, textAlign: 'center' }}>SideBar Left</Box>
                        </Grid>
                        <Grid  size={{ xs: 12, md: 6 }}>
                            <Box sx={{ bgcolor: 'grey.100', p: 2, textAlign: 'center' }}>
                                <Routes/>
                            </Box>
                        </Grid>
                        <Grid  size={{ xs: 12, md: 3 }}>
                            <Box sx={{ bgcolor: 'grey.200', p: 2, textAlign: 'center' }}>SideBar Right</Box>
                        </Grid>
                    </Grid>
                </Container>

                {/* Footer */}
                <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 2, textAlign: 'center' }}>
                    <Typography variant="body2">Footer</Typography>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default Layout;