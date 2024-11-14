import React from 'react';
import {Box, Button, Stack, Typography} from "@mui/material";
import {useTheme} from "../Context.jsx";
import {useDispatch} from "react-redux";
import {deleteUser} from "../store/slice/slice.js";

function CardUsers({ data, onUpdate, onDelete }) {
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
                    display='flex'
                    alignItems='flex-start'
                    sx={{ width: '70%' }}
                >
                    <Typography variant='h5' >{data.id}</Typography>
                    <Typography variant='h6'>{data.name}</Typography>
                    <Typography variant='body2'>{data.email}</Typography>
                </Stack>
                <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="flex-end"
                    sx={{ width: '30%' }}
                >
                    <Button sx={{flexShrink: 0  }} variant='outlined' color={darkMode ? "secondary" : "primary"} onClick={onUpdate}>
                        Змінити
                    </Button>
                    <Button sx={{flexShrink: 0  }} variant='outlined' color={darkMode ? "warning" : "error"} onClick={onDelete}>
                        Видалити
                    </Button>
                </Stack>
            </Stack>
        </>
    );
}

export default CardUsers;