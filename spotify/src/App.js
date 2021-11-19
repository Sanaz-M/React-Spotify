import './App.css';
import Footer from './components/Footer';
import './components/Component.css'
import SideBar from './components/SideBar';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar'
import {Container, Row, Col} from 'react-bootstrap'


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
