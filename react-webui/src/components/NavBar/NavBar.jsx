import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const NavBar = () => {
  return (
    <div style={{ marginLeft: "auto" }}>
      <Link to="/userform">
        <Button color="inherit">UserForm</Button>
      </Link>
      <Link to="/userform1">
        <Button color="inherit">UserForm2</Button>
      </Link>
    </div>
  );
};

export default NavBar;
