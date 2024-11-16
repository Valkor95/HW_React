import React from 'react';
import {Navigate, useRoutes} from "react-router-dom";
import MainPage from "/src/pages/MainPage.jsx";
import Page404 from "/src/components/Page404.jsx";

function Routers() {
    const routesElements = useRoutes([
        {path: '/', element: <Navigate to="/home" replace/>},
        {path: "/home", element: <MainPage />},
        {path: '*', element: <Page404/>}
    ])
    return routesElements
}

export default Routers;