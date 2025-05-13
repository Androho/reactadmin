import './App.css'
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import MainContent from "./components/mainContent/MainContent.jsx";

function App() {
    return (
        <div className="app-layout">
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    )
}

export default App
