import { Link } from "react-router-dom";
import { Card, Row } from "reactstrap";


// eventually animate these on hover.  active should stay 'popped out'
const SidebarLinks = () => {
    return (
        <Row className="sidebar-links">
            <Card>
                <Link to="/">Home</Link>
            </Card>
            <Card>
                <Link to="mix-mash">Mix Mash</Link>
            </Card>
            <Card>
                <Link to="account">Account</Link>
            </Card>
            <Card>
                <Link to="about">About</Link>
            </Card>
            <Card>
                <Link to="links">Links</Link>
            </Card>
        </Row>
    );
};

export default SidebarLinks;
