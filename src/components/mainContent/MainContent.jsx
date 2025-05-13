import './MainContent.scss'
import Header from "../header/Header.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "../../pages/Home.jsx";
import About from "../../pages/About.jsx";

function MainContent() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </main>
    );
}

export default MainContent;