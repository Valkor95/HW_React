import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchImageCVRequest} from "../store/slice/imageSlice.js";
import {Box, Button} from "@mui/material";

function ImageComponent(props) {
    const dispatch = useDispatch();
    const {urlCV, loading, error } = useSelector((state) => state.image)

    const handleFetchImage = () => {
        dispatch(fetchImageCVRequest())
    }

    return (
        <>
            <Box sx={{
                marginTop: '15px',
            }}>
                <Button variant="contained" color={urlCV ? "success" : "primary"} onClick={handleFetchImage} disabled={loading}>
                    {loading ? 'Loading...' : 'Get my CV'}
                </Button>
            </Box>
            {error &&
                <Box>
                    <p>Error: {error}</p>
                </Box>
            }
            <Box sx={ urlCV ? {
                border: '1px solid black',
                borderRadius: '10px',
                padding: '15px'
            } : {}}>
                {urlCV && <img src={urlCV} alt="CV" style={{ width: '600px' }} />}
            </Box>

        </>
    );
}

export default ImageComponent;