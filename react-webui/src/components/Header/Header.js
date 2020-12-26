import React from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import { useSelector } from "react-redux";

const Header = () => {
  const userinfo = useSelector((state) => state.AppReducer.userInfo);

  if (userinfo != null) {
    console.log("userinfo : " + JSON.stringify(userinfo));
    console.log("username : " + userinfo.username);
  }
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

            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        {userinfo !== null && (
          <Nav className="mr-2 text-light">{userinfo.username}</Nav>
        )}
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success" className="text-light">
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export { Header };
