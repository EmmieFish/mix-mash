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
} from "reactstrap";
import { useState, useEffect } from "react";

const CLIENT_ID = "7db8f3e34e8c49aa9f54a64a15246022";
const CLIENT_SECRET = "05b5b6f7df87494482a58fbe8ccefe0f";

const AlbumSpotifySearchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const [accessToken, setAccessToken] = useState("");
    const [albums, setAlbums] = useState([]);

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
        console.log("Search for " + searchInput);

        //Get request using search to get the Artist ID
        let searchParameters = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + accessToken,
            },
        };

        let artistID = await fetch(
            "https://api.spotify.com/v1/search?q=" +
                searchInput +
                "&type=artist",
            searchParameters
        )
            .then((response) => response.json())
            .then((data) => {
                return data.artists.items[0].id;
            });

        console.log("Artist ID is " + artistID);

        //Get request with Artist ID grab all the albums from that artist

        let returnedAlbums = await fetch(
            "https://api.spotify.com/v1/artists/" +
                artistID +
                "/albums" +
                "?include_groups=album&market=US&limit=50",
            searchParameters
        )
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setAlbums(data.items);
        });

        //Display those albums to the user
    }


    return (
        <Container>
            <Row className="ml-3">
                <Card className="mt-4">
                    <InputGroup className="my-3" size="lg">
                        <Input
                            placeholder="Search for an [Artist] or [Song]"
                            type="input"
                            onKeyPress={(event) => {
                                if (event.key == "Enter") {
                                    search();
                                }
                            }}
                            onChange={(event) =>
                                setSearchInput(event.target.value)
                            }
                        />
                        <Button onClick={search}>Search</Button>
                    </InputGroup>
                </Card>
            </Row>
            <Row className="row">
                {albums.map((album, idx) => {
                    return (
                        <Card className="mt-1 col-3">
                            <CardImg src={album.images[0].url} />
                            <CardBody>
                                <CardTitle>{album.name}</CardTitle>
                            </CardBody>
                        </Card>
                    );
                })}
            </Row>
        </Container>
    );
};

export default AlbumSpotifySearchBar;
