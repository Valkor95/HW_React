import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchImageSWRequest} from "../store/slice/imageSlice.js";
import {Box} from "@mui/material";

function Swapi(props) {
    const {urlSW, loading, error } = useSelector((state) => state.image)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchImageSWRequest())
    }, [dispatch]);

    return (
        <>
            <Box sx={{
                marginTop: "15px"
            }}>
                {urlSW && <img src={urlSW} alt="SW" style={{ width: '600px' }} />}
            </Box>
            {loading &&
                    <h1>Loading...</h1>
            }
            {error &&
                <Box>
                    <p>Error: {error}</p>
                </Box>
            }

        </>

    );
}

export default Swapi;