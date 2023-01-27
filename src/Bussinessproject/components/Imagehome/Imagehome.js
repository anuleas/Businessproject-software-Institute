import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './imagehome.css'
//Background image
function Imagehome() {
  return (
    <>
    <Container fluid>
      <Row>
        <Col >
           <div className="Imagebckhome">
            <div className="heading">
              <h1>welcome to AnnaZ</h1>
              <h2>Web designing and developing</h2>
              <p>A new corporate training platform providing advanced level skill development training and mentoring around emerging technologies, Which makes it the Best Software Learning & Training Institute in Kerala.</p>
              <a href="/About">Moredetails</a>
              
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Imagehome