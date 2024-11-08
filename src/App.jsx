import React from 'react';
import {ThProvider} from "./ContextTheme.jsx";
import Layout from "./Components/Layout.jsx";
import {BrowserRouter} from "react-router-dom";

function App(props) {
    return (
        <ThProvider>
            <BrowserRouter>
                <Layout/>
            </BrowserRouter>
        </ThProvider>
    );
}

export default App;