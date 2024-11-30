import React from 'react';
import {useRoutes} from "react-router-dom";
import CVPage from "../pages/CVPage.jsx";
import Todolist from "../pages/Todolist.jsx";
import SWAPI from "../pages/SWAPI.jsx";
import Page404 from "../pages/Page404.jsx";


function Routers(props) {
    const routes = useRoutes([
        {path:'/', element:  <CVPage />},
        {path: '/todolist', element:  <Todolist />},
        {path: '/swapi', element: <SWAPI />},
        {path: '*', element: <Page404/>},
    ])

    return routes;
}

export default Routers;