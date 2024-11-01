import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./Components/Pages/MainPage.jsx";
import ContactsPage from "./Components/Pages/ContactsPage.jsx";
import AboutPage from "./Components/Pages/AboutPage.jsx";

function App() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' component={MainPage}/>
                    <Route path='/contact' component={ContactsPage}/>
                    <Route path='/about' component={AboutPage}/>
                </Routes>
            </BrowserRouter>
    );
}

export default App;