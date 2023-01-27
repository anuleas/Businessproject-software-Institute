import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Col from "react-bootstrap/Col";
import Home from './components/home/Home'

import About from './components/About/About'
import Imagehome from  './components/Imagehome/Imagehome'
import Programs from "./components/Programs/Programs";

import 'bootstrap/dist/css/bootstrap.min.css';
import Contactus from "./components/contactus/contactus";
import Aftercontactus from "./components/AfterContactus/Aftercontactus";
import './components/App.css'

function App()
    {
    return(
    <>
    <Container fluid>
     <Row className="Appstyle"> 
      <Col>
   <BrowserRouter>
           
              <Home />  
              <Routes>
                    <Route path="/" element={<Imagehome />}> </Route>
                    <Route path="/About" element={<About />}> </Route>
                    <Route path="/Programs" element={<Programs />}> </Route>
                    <Route path="/Contactus" element={<Contactus />}> </Route>
                    <Route path="/Aftercontactus" element={<Aftercontactus />}> </Route>
                  
           </Routes> 
           
    </BrowserRouter>
    </Col> 
    </Row> 
    </Container>
     
    </>
    )
    }
  export default App;