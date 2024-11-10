import React from 'react';
import {Provider} from "./Context.jsx";
import Layout from "./Components/Layout.jsx";
import {BrowserRouter} from "react-router-dom";

function App(props) {
    return (

            <BrowserRouter>
                <Provider>
                <Layout/>
                </Provider>
            </BrowserRouter>

    );
}

export default App;