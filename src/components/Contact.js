import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { Form, Button, FormControl, InputGroup } from "react-bootstrap";


function Contact() {
    return (
      <>
<Container>
<Row>
<Col md={6}>
    <Form>
    <h2>Submit your details</h2>
    <Form.Group controlId="formName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="Name"  />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email"  />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <InputGroup className="mb-2" >
                <InputGroup.Prepend>
                  <InputGroup.Text>https://</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl placeholder="" />
              </InputGroup>
              <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary1" type="submit">
    Submit
  </Button>
</Form>
</Col>
    <Col xs={6}
            md={4}
            xs={{ order: "first" }}
            md={{ order: "last" }}
            className="contactInfo">

<p><i class="fas fa-envelope"></i>hello@yay.com</p>
<p><i class="fas fa-phone"></i>123 456 7890</p>
<p><i class="fas fa-map-marker-alt"></i>              
              <span>123 Some Street</span>
              <span>Somewhere </span>
              <span>Some City </span>
              <span>10000</span>
              </p>
</Col>
  </Row>
</Container>
<div className="footer.btm">
  <footer>
  <Row>
    <Col sm><i class="fab fa-vimeo-v"></i><i class="fab fa-youtube"></i></Col>
    <Col sm>hello@yay.com</Col>
    <Col sm>Copyright 2020</Col>
  </Row>
  </footer>
</div>
</>
    );
}

export default Contact
