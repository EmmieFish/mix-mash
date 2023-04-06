import {
    Container,
    Row
} from "reactstrap";
import tempLogo from "../app/assets/images/tempLogo.jpg"
import tempMix from "../app/assets/images/tempMix.png"

//going to turn this back into a bootstrap navbar, prob... maybe...  or use a modal pop up for the "dropdown"

const Header = () => {
    return (
        <Container sticky="top" className="header">
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