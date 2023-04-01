import HomePageWelcomeCard from "../features/homepage/HomePageWelcomeCard";
import HomePageInstructions from "../features/homepage/HomePageInstructions";
import HomePageMixMash from "../features/homepage/HomePageMixMash";
import { Container, Row } from "reactstrap";

const HomePage = () => {
    return (
        <Container>
            <Row>
                <HomePageWelcomeCard />
            </Row>
            <Row>
                <HomePageInstructions />
            </Row>
            <Row>
                <HomePageMixMash />
            </Row>
        </Container>
    );
};

export default HomePage;