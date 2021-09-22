import React, { useState } from "react";
import { Form, Button, Container, Card, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import {
  authenticate,
  authenticateBegin,
} from "../../redux/actions/authactions";
import "../../styles/Form.css";

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
    console.log(
      "In login page user token is not empty" + JSON.stringify(userToken)
    );
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
    <div className="login-wrapper">
      <div className="login-inner">
        {isSubmited && <Row>{error}</Row>}
        <form>
          <h3 className="text-center">Sign In</h3>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              value={userName}
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => onChangeUserName(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => onChangePassword(event.target.value)}
            />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={loginHandler}
          >
            Submit
          </button>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
            <br />
            Register <a href="/signup">SignUp?</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export { Login };
