import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import MixMashAppPage from './pages/MixMashAppPage';
import AccountPage from './pages/AccountPage';
import AboutPage from './pages/AboutPage';
import LinksPage from './pages/LinksPage';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="mix-mash" element={<MixMashAppPage />} />
                <Route path="account" element={<AccountPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="links" element={<LinksPage />} />
            </Routes>
            {/* eventually make this be able to swap between the footer or the sidebar based on page size  */}
            <Footer />
        </div>
    );
}

export default App;
