import React from 'react';
import {Button} from "@mui/material";

function ButtonFetch(props) {
    return (
        <Button
            variant="contained"
            color="secondary"
            onClick={() => console.log('Fetching data...')}
        >
            Fetch Data
        </Button>
    );
}

export default ButtonFetch;