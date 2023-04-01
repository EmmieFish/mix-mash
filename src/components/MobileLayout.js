import HomePage from "../pages/HomePage";
import MixMashAppPage from "../pages/MixMashAppPage";
import AccountPage from "../pages/AccountPage";
import AboutPage from "../pages/AboutPage";
import LinksPage from "../pages/LinksPage";
import Header from "./Header";
import { Container, Row } from "reactstrap";
import { Route, Routes } from "react-router-dom";

const MobileLayout = () => {
    return (
        <Container>
            <Row>
                <Header />
            </Row>
            <Row>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="mix-mash" element={<MixMashAppPage />} />
                    <Route path="account" element={<AccountPage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="links" element={<LinksPage />} />
                </Routes>
            </Row>
        </Container>
    );
};

export default MobileLayout;
