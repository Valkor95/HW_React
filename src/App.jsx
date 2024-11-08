import React from 'react';
import {ThProvider} from "./ContextTheme.jsx";
import Layout from "./Components/Layout.jsx";

function App(props) {
    return (
        <ThProvider>
            <Layout/>
        </ThProvider>
    );
}

export default App;