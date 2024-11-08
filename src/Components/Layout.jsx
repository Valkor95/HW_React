import React from 'react';
import {AppBar, Box, Container, Toolbar, Typography} from "@mui/material";
import Grid from '@mui/material/Grid2';
import Header from "./Header.jsx";
import Routes from "./Routes.jsx";

function Layout(props) {
    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header/>

            <Container maxWidth="lg" sx={{ flex: 1, my: 4 }}>
                <Grid container spacing={3}>
                    <Grid sx={{background: 'red'}} size={{ xs: 12, md: "grow" }}>
                        <Box>SideBar Left</Box>
                    </Grid>
                    <Grid sx={{background: 'red'}} size={{ xs: 12, md: 6 }}>
                        <Box>
                            <Routes/>
                        </Box>
                    </Grid>
                    <Grid sx={{background: 'red'}} size={{ xs: 12, md: "grow" }}>
                        <Box>SideBar Right</Box>
                    </Grid>
                </Grid>
            </Container>

            {/* Footer */}
            <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 2, textAlign: 'center' }}>
                <Typography variant="body2">Footer</Typography>
            </Box>
        </Box>
    );
}

export default Layout;