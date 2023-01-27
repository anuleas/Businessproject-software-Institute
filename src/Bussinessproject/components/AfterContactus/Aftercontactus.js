import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Col from "react-bootstrap/Col";
import "./Aftercontac.css";

//enquireis after send

class Aftercontactus extends React.Component {
  render() {
    return (
      <>
        <Container fluid>
          <Row className="aftercontactstyle">
            <Col  className="headingcontaus">
              <h4>Thank you for taking interest in starting a career.We will review your query and get back to you soon. </h4>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default Aftercontactus;
