import React from 'react';
import {Box} from "@mui/material";

function ContainerImg({src, alt, width, height}) {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <Box
                component="img"
                src={src}
                alt={alt}
                sx={{
                    width: width,
                    height: height,
                    objectFit: 'cover',
                    borderRadius: '8px',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                }}
            />
        </Box>
    );
}

export default ContainerImg;