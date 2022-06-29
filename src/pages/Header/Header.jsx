import { Navbar, Nav, Container, Button } from "react-bootstrap";
import React from "react";

function Header() {
  return (
    <Navbar expand="xl" fixed="top" className="gap-3 px-3" variant="dark">
      <Container className="align-items:center text-white">
        <Navbar.Brand href="#home">*</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex-grow-1 justify-content-center align-items-center">
            <Nav.Link href="#home" >Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Work Experience</Nav.Link>
            <Nav.Link href="#home">Projects</Nav.Link>
            <Nav.Link href="#link">Skills</Nav.Link>
            <Nav.Link href="#link">Resume</Nav.Link>
            <Nav.Link>
              <Button variant="primary">Contact Me</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
