import React from 'react';
import {Card, CardContent, Typography, useTheme} from "@mui/material";

function DataCard(props) {
    const theme = useTheme();
    return (
        <Card
            sx={{
                width: 300,
                margin: 'auto',
                boxShadow: 3,
                borderRadius: 2,
                backgroundColor: '#424242',
                color: theme.palette.text.primary,
            }}
        >
            <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                    Заголовок
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Здесь будет отображаться информация из состояния Redux.
                </Typography>
            </CardContent>
        </Card>
    );
}

export default DataCard;