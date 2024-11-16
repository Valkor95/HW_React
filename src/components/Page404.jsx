import React from 'react';
import {Box, Typography} from "@mui/material";

function Page404(props) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                textAlign: 'center',
            }}
        >
            <Typography variant="h1" color="error" sx={{ fontWeight: 'bold', mb: 2 }}>
                404
            </Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
                Такой адрес не существует!
            </Typography>
            <Typography variant="body1" color="textSecondary">
                Проверьте URL или вернитесь на главную страницу.
            </Typography>
        </Box>
    );
}

export default Page404;