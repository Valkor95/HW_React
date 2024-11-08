import React from 'react';
import {AppBar, Box, Container, Grid, Toolbar, Typography} from "@mui/material";

function Layout(props) {
    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Header
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Main Content */}
            <Container maxWidth="lg" sx={{ flex: 1, my: 4 }}>
                <Grid container spacing={3}>
                    {/* Left Sidebar */}
                    <Grid item xs={12} md={3}>
                        <Box sx={{ bgcolor: 'grey.200', p: 2 }}>Левый Сайдбар</Box>
                    </Grid>

                    {/* Main Content Area */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ bgcolor: 'grey.100', p: 2 }}>Основное Содержимое</Box>
                    </Grid>

                    {/* Right Sidebar */}
                    <Grid item xs={12} md={3}>
                        <Box sx={{ bgcolor: 'grey.200', p: 2 }}>Правый Сайдбар</Box>
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