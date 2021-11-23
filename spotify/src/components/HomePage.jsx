import { useEffect, useState } from "react"
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SingleAlbum from "./SingleAlbum";


const HomePage = ({ query }) => {

    const [song, setSong] = useState([])
    const [song1, setSong1] = useState([])



    useEffect(() => {
        fetchSongs();
    }, [])


    const fetchSongs = async (query) => {

        try {
            let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`, {
                headers: {
                    "Content-type": 'application/json',
                }
            });
            console.log(response)

            if (response.ok) {
                let data = await response.json();
                console.log(data)
                setSong(data.data);
            } else {
                console.log("error fetching details");
            };
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <Container>
            <Row>
                <Col md={8}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            value={query}
                            // onChange={e => setQuery(e.target.value)}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={8}>
                    <Row>
                        {
                            song.length > 0 && song.slice(0, 12).map((song) => (
                                <Link to={"album/" + song.album.id}>
                                    <SingleAlbum
                                        key={song.id}
                                        src={song.src}
                                    />
                                </Link>
                            ))
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}


export default HomePage