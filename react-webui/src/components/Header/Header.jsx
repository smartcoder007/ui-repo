import React from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Row,
  Col
} from "react-bootstrap";

import { logoutuser } from "../../redux/actions/authactions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Header = (props) => {
  const userinfo = useSelector((state) => state.AppReducer.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (userinfo != null) {
    console.log("Header userinfo : " + JSON.stringify(userinfo));
    console.log("username : " + userinfo.username);
  }
  const logoutHandler = () => {
    console.log("logoutHandler.....");
    dispatch(logoutuser());
    if (userinfo == null) {
      console.log("log out successful");
      console.log("props" + JSON.stringify(props));
      navigate('/login')
    } else {
      console.log("log out un successful ");
    }
  };

  return (
    <Navbar bg="primary" expand="lg">
      <Navbar.Brand href="#home" className="text-light">
        React-Bootstrap
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/landing" className="text-light">
            Home
          </Nav.Link>
          <NavDropdown
            title="Features"
            id="basic-nav-dropdown"
            className="text-light"
          >
            <NavDropdown.Item href="/autocomplete">
              AutoComplete
            </NavDropdown.Item>
            <NavDropdown.Item href="/userform">
              User Registration
            </NavDropdown.Item>
            <NavDropdown.Item href="/userform1">
              User Registration2
            </NavDropdown.Item>
            <NavDropdown.Item href="/users">Users</NavDropdown.Item>
              <NavDropdown.Item href="/product">Product</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
       </Navbar.Collapse>
       <Nav className="justify-content-end">
        {userinfo !== null && (
          <Nav className="me-5 text-light"> User : {userinfo.username}</Nav>
        )}
        <Form inline>
        <Row>
        <Col xs="auto">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
         </Col>
         <Col xs ="auto">
          <Button variant="outline-success" className="text-light">
            Search
          </Button>
          </Col>
         </Row>
        </Form>
        <Nav className="mr-sm-1">
          {/* <Nav.Link href="/logout" className="text-light">
            Logout
        </Nav.Link> */}
          <Button type="submit" onClick={logoutHandler}>
            Logout
          </Button>
        </Nav>
       </Nav>
    </Navbar>
  );
};

export { Header };
