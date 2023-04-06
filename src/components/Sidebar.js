import SidebarLinks from "./SidebarLinks";
import { Col, Row, Container } from "reactstrap";
import tempMash from "../app/assets/images/tempMash.png";
import tempLogo from "../app/assets/images/tempLogo.jpg";
import useViewportHeight from "../utils/useViewportHeight";

const Sidebar = () => {
    const viewHeight = useViewportHeight();
    const breakpoint = 620;
    return (
        <Container className="sidebar">
            <Row>
                <img className="mt-3 mb-4" src={tempLogo} />
            </Row>
            <Row>
                <SidebarLinks />
            </Row>
            <img className="sidebar-mash" src={tempMash} style={ viewHeight < breakpoint ? { display: 'none' } : { display: 'block'}}/>
        </Container>
    );
};

export default Sidebar;
