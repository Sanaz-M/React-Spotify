import './App.css';
import Footer from './components/Footer';
import './components/Component.css'
import SideBar from './components/SideBar';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import { Container, Row, Col } from 'react-bootstrap'
import HomePage from './components/HomePage';
import songs from './components/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Col md={4}>
            <SideBar />
          </Col>
          <Col md={8}>
            {/* <div id="content" class="h-100 overflow-auto"> */}

            {/* <Row className="mb-5"> */}
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage songs={songs}/>} />
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
