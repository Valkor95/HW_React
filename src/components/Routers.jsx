import React from 'react';
import {useRoutes} from "react-router-dom";
import CVPage from "../pages/CVPage.jsx";
import Todolist from "../pages/Todolist.jsx";
import SWAPI from "../pages/SWAPI.jsx";

function Routers(props) {
    const routes = useRoutes([
        {path:'/', element:  <CVPage />},
        {path: '/todolist', element:  <Todolist />},
        {path: '/swapi', element: <SWAPI />},
        {path: '*', element: <Page404/>},
    ])

    return (
        <div></div>
    );
}

export default Routers;