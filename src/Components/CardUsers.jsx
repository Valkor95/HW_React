import React from 'react';
import {Box, Button, Stack, Typography} from "@mui/material";
import {useTheme} from "../Context.jsx";

function CardUsers({ data }) {
    const {darkMode} = useTheme()
    return (
        <>
            <Stack
                display='flex'
                direction="row"
                spacing={2}
                justifyContent="space-between"
                alignItems="center"
            >
                <Stack
                 alignItems='flex-start'
                >
                    <Typography variant='h5'>{data.id}</Typography>
                    <Typography variant='h6'>{data.name}</Typography>
                    <Typography variant='body2'>{data.email}</Typography>
                </Stack>
                <Stack
                    direction="row"
                    spacing={2}
                >
                    <Button variant='outlined' color={darkMode ? "secondary" : "primary"}>
                        Змінити
                    </Button>
                    <Button variant='outlined' color={darkMode ? "warning" : "error"}>
                        Видалити
                    </Button>
                </Stack>
            </Stack>
        </>
    );
}

export default CardUsers;