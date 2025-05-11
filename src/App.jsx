import './App.css'
import Header from "./components/Header.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

function App() {
    return (
        // <>
        //   <Header />
        //   <Routes>
        //     <Route path="/" element={<Home />} />
        //     <Route path="/about" element={<About />} />
        //   </Routes>
        // </>
        <div className="app-layout">
            <Header/>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </main>
            <footer>Я — футер</footer>
        </div>
    )
}

export default App
