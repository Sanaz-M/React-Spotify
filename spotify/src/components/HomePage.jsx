import { useEffect, useState } from "react"
import SingleSong from "./SingleSong"
import { useParams } from "react-router";
import { Container, Row, Col, Form } from "react-bootstrap";


const HomePage = (props) => {

    const [song, setSong] = useState([])
    const [query, setQuery] = useState('')
    const [selectedSong, setSelectedSong] = useState(null)
    const params = useParams();


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
                            onChange={e => setQuery(e.target.value)}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={8}>
                    <Row>
                        {
                            song.length>0 && song.slice(0 , 12).map((song) => (

                                <SingleSong
                                    key={song.id}
                                    song={props}
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