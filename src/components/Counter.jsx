import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../store/slice/counter.js";

function Counter(props) {
    const count = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                padding: 2
            }}
        >
            <Typography variant="h4" sx={{ color: "primary.main" }}>
                Счетчик: {count}
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
                <Button variant="contained" color="primary" onClick={() => dispatch(increment())}>
                    Увеличить
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => dispatch(decrement())}
                >
                    Уменьшить
                </Button>
            </Box>
        </Box>
    );
}
export default Counter;