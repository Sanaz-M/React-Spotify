import { useEffect, useState } from "react"
import SingleSong from "./SingleSong"
import { useParams } from "react-router";
import { Container, Row, Col, Form } from "react-bootstrap";


const HomePage = ({ songs }) => {

    const [query, setQuery] = useState('')
    const [selectedSong, setSelectedSong] = useState(null)
    const params = useParams();

    const filterSongs = () => {
        return songs.filter(song => song.title.toLowerCase().includes(query))
    }


    useEffect(()=>{
        fetchSongs();
    },[])


    const fetchSongs = async() => {

    try{
        let response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=Qeen', {
            headers: {
                "Content-type": 'application/json',
            }
        });
          console.log(response)
    
    if (response.ok) {
        let data = await response.json();
        console.log(data)
        setSelectedSong(data);
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
                        <Form.Label>Search</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={8}>
                    <Row>
                        {
                            filterSongs().map(song => (

                                <SingleSong
                                    key={song._id}
                                    song={song}
                                    selectedSong={selectedSong}
                                />
                            ))
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}


export default HomePage