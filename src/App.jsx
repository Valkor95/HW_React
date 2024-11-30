import React from 'react';
import ImageComponent from "./components/ImageComponent.jsx";
import Navigation from "./components/Navigation.jsx";
import Routers from "./components/Routers.jsx";

const App = () => {
    return (
        <div>
            <Navigation/>
            <Routers/>
        </div>
    );
};

export default App;