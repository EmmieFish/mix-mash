import { Col, Row, Container } from 'reactstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import MixMashAppPage from './pages/MixMashAppPage';
import AccountPage from './pages/AccountPage';
import AboutPage from './pages/AboutPage';
import LinksPage from './pages/LinksPage';
import Header from './components/Header';
import Sidebar from './components/Sidebar';



function App() {
    return (
        <div className="App">
            <Container fluid>
                <Row>
                    <Header />
                </Row>
                <Row>
                    <Col xs="3" sm="2">
                        <Sidebar />
                    </Col>
                    <Col>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route
                                path="mix-mash"
                                element={<MixMashAppPage />}
                            />
                            <Route path="account" element={<AccountPage />} />
                            <Route path="about" element={<AboutPage />} />
                            <Route path="links" element={<LinksPage />} />
                        </Routes>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
