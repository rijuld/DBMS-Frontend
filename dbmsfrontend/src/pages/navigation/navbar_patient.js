import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import { Nav, Navbar,NavDropdown} from 'react-bootstrap';
import {Link} from "react-router-dom";

function Na_patient() {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Jeevan Daan</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/register_patient">Register</Nav.Link>
      <Nav.Link href="/patient_profile/1">Patient</Nav.Link>
      <NavDropdown title="More" id="collasible-nav-dropdown">
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">...</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="/about">Contact us</Nav.Link>
      <Nav.Link eventKey={2} href="/about">
        Our social handles
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>
  );
}

export default Na_patient;

