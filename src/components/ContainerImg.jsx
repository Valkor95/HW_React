import React from 'react';
import {Box} from "@mui/material";

function ContainerImg({src, alt, width = 'auto', height = 'auto', maxWidth = '400px'}) {
    return (
            <Box
                component="img"
                src={src}
                alt={alt}
                sx={{
                    width: width,
                    height: height,
                    // objectFit: 'cover',
                    maxWidth: maxWidth,
                    borderRadius: '8px',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                }}
            />
    );
}

export default ContainerImg;