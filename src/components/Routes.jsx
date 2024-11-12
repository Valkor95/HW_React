import React from 'react';
import {Navigate, useRoutes} from "react-router-dom";
import MainPage from "../page/MainPage.jsx";
import UserIdPage from "../page/UserIdPage.jsx";
import Page404 from "./Page404.jsx";

function Routes() {
    const routesElements = useRoutes([
        {path: '/', element: <Navigate to="/home" replace/>},
        {path: "/home", element: <MainPage />},
        {path: '/:userID', element: <UserIdPage/>},
        {path: '*', element: <Page404/>}
    ])
    return routesElements
}

export default Routes;