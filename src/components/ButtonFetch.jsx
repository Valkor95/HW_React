import React, {useEffect} from 'react';
import {Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getData} from "../store/slice/dataState.js";

function ButtonFetch(props) {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.data)

    const handleFetch = () => {
        dispatch(getData())
    }

    useEffect(() => {
        handleFetch();
    }, [dispatch]);

    useEffect(() => {
        console.log(data)
    }, [data]);

    return (
        <Button
            variant="contained"
            color="secondary"
            onClick={handleFetch}
        >
            Fetch Data
        </Button>
    );
}

export default ButtonFetch;