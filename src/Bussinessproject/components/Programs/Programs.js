import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Col from "react-bootstrap/Col";
import "./Programs.css";


//what are the programs in this software institute

class Programs extends React.Component {
  render() {
    return (
      <>
        <Container fluid>
          <Row className="headingprograms">
            <Col>
              <h1>Programs</h1>
            </Col>
          </Row>
          <Row className="programs">
            <Col className="subjectborder">
              <h1 style={{ color: "green" }}>Flutter</h1>
              <p>
                Flutter is an open source UI software development kit developed
                by Google.
              </p>
            </Col>
            <Col className="subjectborder">
              <h1 style={{ color: "green" }}>Mern stack</h1>
              <p>
                Mern Stack is acollection of javascript based technologies for
                web development
              </p>
            </Col>
            <Col className="subjectborder">
              <h1 style={{ color: "green" }}>Java</h1>
              <p>Java is used to develop web applications.</p>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default Programs;
