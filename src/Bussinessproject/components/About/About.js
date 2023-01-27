import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Col from "react-bootstrap/Col";
import "./About.css";


//This is about page
class About extends React.Component {
  render() {
    return (
      <>
        <Container fluid>
          <Row className="headingaboutme">
            <Col>
              <h1>About AnnaZ</h1>
            </Col>
          </Row>
          <Row className="aboutas">
            <Col>
              <p>
                Annaz is a leading learning & mentoring platform backed by
                AnnaZ, a 15-year-old technology company based in Infopark Kochi.
                The platform enables new talents to learn, develop and upgrade
                their skills around emerging technologies. As a complete
                technology training centre, we encompass a detailed framework to
                inform, educate and train students to find success in their
                respective fields. We are the pioneers among IT firms in setting
                up a corporate learning & mentoring platform within the Infopark
                Campus. The key aspect of this fast-learning initiative is that
                we create skilled resources who can match the skill demands in
                the job market, Which makes it the Best Software Learning &
                Training Institute in Kerala.
              </p>
            </Col>

            <Col className="quality">
              <div>
                <div className="borderpositives">
                  <h1 style={{ color: "red" }}>100+</h1>
                  <p>Associated Companies</p>
                </div>
                <div className="borderpositives">
                  <h1 style={{ color: "red" }}>100+</h1>
                  <p>Placement Associations</p>
                </div>
              </div>

              <div>
                {" "}
                <div className="borderpositives">
                  <h1 style={{ color: "red" }}>60+</h1>
                  <p>Skill Industry Experts</p>
                </div>
                <div>
                  <div className="borderpositives">
                    <h1 style={{ color: "red" }}>1200+</h1>
                    <p>Aspiring Students</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default About;
