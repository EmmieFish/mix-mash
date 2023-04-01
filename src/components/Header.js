import {
    Container,
    Row
} from "reactstrap";
import tempLogo from "../app/assets/images/tempLogo.jpg"
import tempMix from "../app/assets/images/tempMix.png"


const Header = () => {
    return (
        <Container className="header">
            <Row>
                <div>
                    <img className="header-logo" src={tempLogo} />
                    <img className="header-mix" src={tempMix} />
                </div>
            </Row>
        </Container>
    );
}

export default Header