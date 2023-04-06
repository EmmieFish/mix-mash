import { Card, CardBody, CardHeader, CardImg, CardTitle, CardImgOverlay, Container, Row, Col, CardText } from "reactstrap";
import tempMash from "../../app/assets/images/tempMash.png";
import tempMix from "../../app/assets/images/tempMix.png";
import tempDJset from "../../app/assets/images/tempDJset.jpg";

const HomePageMixMash = () => {
    return (
        <Container>
            <Row>
                <Col xs="2">
                    <img className="homeMixMascot" src={tempMix} />
                </Col>
                <Col xs="8">
                    <Card className="text-center">
                        <CardImg src={tempDJset} width="100%" />
                        <CardImgOverlay>
                            <CardTitle>Random Mix Mash</CardTitle>
                            <CardBody>Code Here for two random tracks</CardBody>
                        </CardImgOverlay>
                    </Card>
                </Col>
                <Col xs="2">
                    <img className="homeMashMascot" src={tempMash} />
                </Col>
            </Row>
        </Container>
    );
};

export default HomePageMixMash;
