import { Col, Row, Container, Card, CardImg, CardImgOverlay, CardTitle, CardBody } from "reactstrap";
import tempMix from "../app/assets/images/tempMix.png"
import tempMash from "../app/assets/images/tempMash.png";
import tempDJset from "../app/assets/images/tempDJset.jpg";
import SpotifySearchBar from "../features/search/SpotifySearchBar";


//standin code
const MixMashAppPage = () => {
    return (
        <Container>
            <Row>
                <SpotifySearchBar />
            </Row>
        </Container>
    );
};

export default MixMashAppPage;
