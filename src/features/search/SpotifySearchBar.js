import {
    InputGroup,
    Button,
    Row,
    Form,
    Card,
    CardBody,
    CardImg,
    CardTitle,
    Input,
    Container,
    Col
} from "reactstrap";
import { useState, useEffect } from "react";
import { CLIENT_ID, CLIENT_SECRET } from "../../utils/clientIdAndSecret";



const SpotifySearchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const [accessToken, setAccessToken] = useState("");
    const [tracks, setTracks] = useState([]);
    const [artists, setArtists] = useState([]);
    const [searchType, setSearchType] = useState("artist");

    useEffect(() => {
        // API Access Token

        let authParameters = {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body:
                "grant_type=client_credentials&client_id=" +
                CLIENT_ID +
                "&client_secret=" +
                CLIENT_SECRET,
        };
        fetch("https://accounts.spotify.com/api/token", authParameters)
            .then((result) => result.json())
            .then((data) => setAccessToken(data.access_token));
    }, []);

    // Search

    async function search() {
        console.log("Searching for " + searchInput);


        let searchParameters = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + accessToken,
            },
        };

        let searchArray = await fetch(
            "https://api.spotify.com/v1/search?q=" +
                searchInput +
                "&type=" +
                searchType +
                "&limit=16",
            searchParameters
        )
            .then((response) => response.json())
            .then((data) => {
                searchType === "artist" ?
                    setArtists(data.artists.items)
                :
                    setTracks(data.tracks.items)
                
            });


    }

    return (
        <Container>
            <Row className="ml-3">
                <Card className="mt-4">
                    <InputGroup className="my-3">
                        <Col className="col-8">
                            <Input
                                placeholder="Search for an [Artist] or [Song]"
                                type="input"
                                onKeyPress={(event) => {
                                    if (searchType && event.key == "Enter") {
                                        search();
                                    }
                                }}
                                onChange={(event) =>
                                    setSearchInput(event.target.value)
                                }
                            />
                        </Col>
                        <Col className="col-2">
                            <Input
                                id="searchTypeSelect"
                                name="searchTypeSelect"
                                type="select"
                                onChange={(event) =>
                                    setSearchType(event.target.value)
                                }
                            >
                                <option value={"artist"}>Artist</option>
                                <option value={"track"}>Song</option>
                            </Input>
                        </Col>
                        <Col className="col-1">
                            <Button onClick={search}>Search</Button>
                        </Col>
                    </InputGroup>
                </Card>
            </Row>
            {searchType === "track" && (
                <Row className="row">
                    {tracks.map((track) => {
                        return (
                            <Card className="mt-1 col-3" key={track.id}>
                                <CardBody>
                                    <CardTitle>{track.name}</CardTitle>
                                </CardBody>
                            </Card>
                        );
                    })}
                </Row>
            )}
            {searchType === "artist" && (
                <Row className="row">
                    {artists.map((artist) => {
                        return (
                            <Card className="mt-1 col-3" key={artist.id}>
                                <CardBody>
                                    <CardTitle>{artist.name}</CardTitle>
                                </CardBody>
                            </Card>
                        );
                    })}
                </Row>
            )}
        </Container>
    );
};

export default SpotifySearchBar;



