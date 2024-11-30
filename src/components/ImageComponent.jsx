import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchImageRequest} from "../store/slice/imageSlice.js";

function ImageComponent(props) {
    const dispatch = useDispatch();
    const {url, loading, error } = useSelector((state) => state.image)

    const handleFetchImage = () => {
        dispatch(fetchImageRequest())
    }

    return (
        <div>
            <button onClick={handleFetchImage} disabled={loading}>
                {loading ? 'Loading...' : 'Fetch Image'}
            </button>
            {error && <p>Error: {error}</p>}
            {url && <img src={url} alt="CV" style={{ width: '300px' }} />}
        </div>
    );
}

export default ImageComponent;