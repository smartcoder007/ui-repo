import React, { useState } from "react";
import { Form, Button, Container, Card, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import {
  authenticate,
  authenticateBegin,
} from "../../redux/actions/authactions";

const Login = () => {
  const STATUS = {
    VALID: "valid",
    ERROR: "error",
  };

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmited, setSubmited] = useState(false);

  const dispatch = useDispatch();

  const error = useSelector((state) => state.AppReducer.error);
  const userToken = useSelector((state) => state.AppReducer.userInfo);

  if (userToken != null) {
    return <Redirect to="/landing" />;
  } else {
    console.log("user token is empty");
  }

  const loginHandler = () => {
    console.log("loginHandler.....");
    setSubmited(true);
    dispatch(authenticateBegin());
    dispatch(authenticate(userName, password));
  };
  const onChangeUserName = (value) => {
    setUserName(value);
  };
  const onChangePassword = (value) => {
    setPassword(value);
  };
  return (
    <Container>
      <h6 className="text-center text-primary">User Login</h6>
      {isSubmited && <Row>{error}</Row>}
      <Row className="mt-2 align-items-center">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              value={userName}
              placeholder="Enter username"
              onChange={(event) => onChangeUserName(event.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(event) => onChangePassword(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button
            variant="primary"
            onClick={loginHandler}
            className="text-center"
          >
            Login
          </Button>
        </Form>
      </Row>
    </Container>
  );
};

export { Login };
