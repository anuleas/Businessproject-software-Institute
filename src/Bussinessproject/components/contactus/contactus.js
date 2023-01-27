import React from "react";
import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";

import { useState } from "react";

import Form from "react-bootstrap/Form";
import Aftercontactus from "../AfterContactus/Aftercontactus";
import "./contact.css";
//This is the contact page.for any enquiries this form submit

const Contactus = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState("");

  //after the form submitted ,it goes to aftercontactus page. so navigate function given

  const handleChange = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };
  console.log(value.email);
  console.log(value.subject);

  const onclick = () => {
    console.log("clicked");

    console.log(value.email);
    console.log(value.subject);

    navigate("/Aftercontactus");
  };

  return (
    <Container fluid>
      <Row className="contactstyle">
        <Col className="formstyle">
          <form action="" method="post">
            <Form.Label>Email</Form.Label>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" name="email" onChange={handleChange} />
            </Form.Group>
            <Form.Label>Enquiries/Request</Form.Label>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                name="subject"
                rows={3}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="outline-primary" onClick={onclick}>
              Login
            </Button>{" "}
          </form>
        </Col>
      </Row>
    </Container>
  );
};
export default Contactus;
