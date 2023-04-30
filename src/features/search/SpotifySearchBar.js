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

const CLIENT_ID = "7db8f3e34e8c49aa9f54a64a15246022";
const CLIENT_SECRET = "05b5b6f7df87494482a58fbe8ccefe0f";

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
                "&limit=15",
            searchParameters
        )
            .then((response) => response.json())
            .then((data) => {
                searchType === "artist" ?
                    setArtists(data.artists.items)
                :
                    setTracks(data.tracks.items)
                
            });
            // .then((data) => {
            //     searchType === "artist"
            //         ? console.log(data.artists.items)
            //         : console.log(data.tracks.items);
            // });




        // searchType === "artist"
        //     ? console.log("Artist are: ", artists)
        //     : console.log("Tracks are: ", tracks)

        // console.log(searchArray);



        // let returnedSearch = await fetch(
        //     "https://api.spotify.com/v1/artists/" +
        //         artistID +
        //         "/albums" +
        //         "?include_groups=album&market=US&limit=50",
        //     searchParameters
        // )
        //     .then((response) => response.json())
        //     .then((data) => {
        //         setAlbums(data.items);
        //     });


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
                            <Card className="mt-1 col-3">
                                {/* <CardImg src={track.images[0].url} /> */}
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
                            <Card className="mt-1 col-3">
                                {/* <CardImg src={artist.images[0].url} /> */}
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




        // .then((data) => {
        //     return searchType === "artist"
        //         ? data.artist.items
        //         : data.tracks.items;
        // });
        // .then((data) => {return data});
        // .then((data) => {
        //     searchType === "artist" ? setArtists(data.items) : setTracks(data.items);
        // });

                // console.log("Searching for an " + searchType + " with an ID of " + searchID);

        //Get request with Artist ID grab all the albums from that artist

        // let returnedAlbums = await fetch(
        //     "https://api.spotify.com/v1/artists/" +
        //         artistID +
        //         "/albums" +
        //         "?include_groups=album&market=US&limit=50",
        //     searchParameters
        // )
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log(data);
        //         setAlbums(data.items);
        //     });