import logo from './logo.svg';
import './App.css';
import AboutUsPage from "./AboutUs/AboutUsPage";
import PortfolioPage from "./PortfolioPage/PortfolioPage"
import ContactPage from "./AboutPage/ContactPage";

function App() {
    return (
        <div className="App">
            <AboutUsPage/>
            <PortfolioPage/>
            <ContactPage/>
        </div>
    );
}

export default App;