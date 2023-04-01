import HomePage from "../pages/HomePage";
import MixMashAppPage from "../pages/MixMashAppPage";
import AccountPage from "../pages/AccountPage";
import AboutPage from "../pages/AboutPage";
import LinksPage from "../pages/LinksPage";
import Sidebar from "./Sidebar";
import { Col, Row } from "reactstrap";
import { Route, Routes } from "react-router-dom";

const DesktopLayout = () => {
    return (
        <Row>
            <Col xs="3" sm="2">
                <Sidebar />
            </Col>
            <Col>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="mix-mash" element={<MixMashAppPage />} />
                    <Route path="account" element={<AccountPage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="links" element={<LinksPage />} />
                </Routes>
            </Col>
        </Row>
    );
};

export default DesktopLayout;
