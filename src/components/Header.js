import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    Container,
    Row
} from "reactstrap";
import tempLogo from "../app/assets/images/tempLogo.jpg"


const Header = () => {
    return (
        <Container className="header">
            <Row>
                <div>
                    <img src={tempLogo} />
                </div>
            </Row>
        </Container>
    )
}

export default Header