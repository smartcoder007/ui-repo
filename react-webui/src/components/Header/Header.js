import React from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="primary" expand="lg">
      <Navbar.Brand href="#home" className="text-light">
        React-Bootstrap
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/login" className="text-light">
            Login
          </Nav.Link>
          <Nav.Link href="/home" className="text-light">
            Home
          </Nav.Link>
          <Nav.Link href="/landing" className="text-light">
            Landing
          </Nav.Link>
          <NavDropdown
            title="Dropdown"
            id="basic-nav-dropdown"
            className="text-light"
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
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
