import { Card, CardBody, CardHeader } from "reactstrap";

const HomePageInstructions = () => {
    return (
        <Card className="text-center mb-3 homeInstructionCard">
            <CardHeader>How does this site work?</CardHeader>
            <CardBody>
                <p>Insert info here about how to use Mix Mash.</p>
                <br />
                <p>
                    Yes, Yes, without the oops! Just my luck, no ice. Forget the
                    fat lady! You're obsessed with the fat lady! Drive us out of
                    here! God creates dinosaurs. God destroys dinosaurs. God
                    creates Man. Man destroys God. Man creates Dinosaurs. Hey,
                    take a look at the earthlings. Goodbye! <br /> Must go faster...
                    go, go, go, go, go! You really think you can fly that thing?
                    Remind me to thank John for a lovely weekend. Just my luck,
                    no ice. Eventually, you do plan to have dinosaurs on your
                    dinosaur tour, right? Remind me to thank John for a lovely
                    weekend.
                </p>
            </CardBody>
        </Card>
    );
};

export default HomePageInstructions;
