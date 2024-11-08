import React from 'react';
import {Link, useParams} from "react-router-dom";
import {Button} from "@mui/material";

function UserIdPage(props) {
    const {userID} = useParams()

    return (
        <div> User: {userID}
            <Button component={Link} to="/home" variant="contained">Back to main menu</Button>
        </div>
    );
}

export default UserIdPage;