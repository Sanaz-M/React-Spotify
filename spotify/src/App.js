import './App.css';
import Footer from './components/Footer';
import './components/Component.css'
import SideBar from './components/SideBar';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import { Container, Row, Col } from 'react-bootstrap'
import HomePage from './components/HomePage';
import Album from './components/Album';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <BrowserRouter>
      <Container id="main-container">
        <Row>
          <Col md={3}>
            <SideBar />
          </Col>
          <Col md={9}>
            {/* <div id="content" class="h-100 overflow-auto"> */}

            {/* <Row className="mb-5"> */}
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/album/:songID" element={<Album />} />
              </Routes>
            {/* </Row> */}

            {/* </div> */}

          </Col>
        </Row>

      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
