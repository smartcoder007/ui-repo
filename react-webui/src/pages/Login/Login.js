import React from "react";
import { Form, Button, Container, Card } from "react-bootstrap";

const Login = () => {
  return (
    <div>
      <Container>
        <row className="mt-2 align-items-center">
          <h6 className="text-center text-primary">User Login</h6>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" className="text-center">
              Submit
            </Button>
          </Form>
        </row>
      </Container>
    </div>
  );
};

export { Login };
