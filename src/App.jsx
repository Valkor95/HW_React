import React from 'react';
import {ProviderContext} from "./Context.jsx";
import Layout from "./components/Layout.jsx";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store/store.js";

function App(props) {
    return (
            <Provider store={store}>
                <BrowserRouter>
                    <ProviderContext>
                        <Layout/>
                    </ProviderContext>
                </BrowserRouter>
            </Provider>


    );
}

export default App;