import React from "react";
import { Form, Button, Container, Card, Row, Col } from "react-bootstrap";

const FormComponent1 = (props) => {
  return (
    <Container>
      <h6 className="text-center text-primary">User Registration-2</h6>
      <Row className="mt-2">
        <Col>
          <Form>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                onChange={props.handleChange}
                name="firstName"
                placeholder="First Name"
                value={props.firstName}
              />
              <Form.Text className="text-muted">
                We'll never share your details with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                onChange={props.handleChange}
                name="lastName"
                placeholder="Last Name"
                value={props.lastName}
              />
            </Form.Group>
            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                onChange={props.handleChange}
                name="age"
                placeholder="Age"
                value={props.age}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Gender</Form.Label>
              <br />
              Male
              <input
                type="radio"
                name="gender"
                value="male"
                checked={props.gender === "male"}
                onChange={props.handleChange}
              />
              Female
              <input
                type="radio"
                name="gender"
                value="female"
                checked={props.gender === "female"}
                onChange={props.handleChange}
              />
              {/*
                  <Form.Check
                    inline
                    disabled
                    label="None (disabled)"
                    type={type}
                    id={`inline-${type}-none`}
                  /> */}
            </Form.Group>
            <Form.Group controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control
                as="select"
                onChange={props.handleChange}
                name="destination"
                value={props.destination}
              >
                <option value="">-- Please Choose a destination --</option>
                <option value="Thailand">Thailand</option>
                <option value="Japan">Japan</option>
                <option value="Brazil">Brazil</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Label>Dietary restrictions:</Form.Label>
              <Form.Check
                type="checkbox"
                label="nuts Free"
                name="nutsFree"
                onChange={props.handleChange}
                checked={props.nutsFree}
              />
              <Form.Check
                type="checkbox"
                label="lactoseFree"
                name="lactoseFree"
                onChange={props.handleChange}
                checked={props.lactoseFree}
              />
              <Form.Check
                type="checkbox"
                label="isVegan"
                name="isVegan"
                onChange={props.handleChange}
                checked={props.isVegan}
              />
            </Form.Group>
            <Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form.Group>
            <Form.Group>
              <div>test</div>
            </Form.Group>
          </Form>
        </Col>
        <Col className="bg">
          <Card
            bg="success"
            text="white"
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Header>Entered information:</Card.Header>
            <Card.Body>
              <Card.Title>User Info </Card.Title>
              <Card.Text>
                <p>
                  Your name: {props.firstName} {props.lastName}
                </p>
                <p>Your age: {props.age}</p>
                <p>Your gender: {props.gender}</p>
                <p>Your destination: {props.destination}</p>
                <p>Your dietary restrictions: </p>
                <div className="restrictions">
                  <span>**Nuts free : {props.nutsFree ? " Yes" : "No"}</span>{" "}
                  <br />
                  <span>
                    **Lactose free : {props.lactoseFree ? " Yes" : "No"}
                  </span>{" "}
                  <br />
                  <span>**Vegan meal : {props.isVegan ? " Yes" : "No"}</span>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export { FormComponent1 };
