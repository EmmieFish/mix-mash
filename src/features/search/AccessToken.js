import { useState, useEffect } from "react";

const AccessToken = () => {
    const CLIENT_ID = "7db8f3e34e8c49aa9f54a64a15246022";
    const CLIENT_SECRET = "05b5b6f7df87494482a58fbe8ccefe0f";
    const [accessToken, setAccessToken] = useState("");

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

    return accessToken;
};

export default AccessToken;
