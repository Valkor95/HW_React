import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchImageRequest} from "../store/slice/imageSlice.js";
import {Box, Button} from "@mui/material";

function ImageComponent(props) {
    const dispatch = useDispatch();
    const {url, loading, error } = useSelector((state) => state.image)

    const handleFetchImage = () => {
        dispatch(fetchImageRequest())
    }

    return (
        <>
            <Box sx={{
                marginTop: '15px',
            }}>
                <Button variant="contained" color={url ? "success" : "primary"} onClick={handleFetchImage} disabled={loading}>
                    {loading ? 'Loading...' : 'Get my CV'}
                </Button>
            </Box>
            {error &&
                <Box>
                    <p>Error: {error}</p>
                </Box>
            }
            <Box sx={ url ? {
                border: '1px solid black',
                borderRadius: '10px',
                padding: '15px'
            } : {}}>
                {url && <img src={url} alt="CV" style={{ width: '600px' }} />}
            </Box>

        </>
    );
}

export default ImageComponent;