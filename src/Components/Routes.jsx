import React from 'react';
import {useRoutes} from "react-router-dom";
import MainPage from "../Page/MainPage.jsx";
import UserIdPage from "../Page/UserIdPage.jsx";

function Routes(props) {
    const routesElements = useRoutes([
        {path: '/', element: <MainPage/>},
        {path: '/:userID', element: <UserIdPage/>}
    ])
    return routesElements
}

export default Routes;