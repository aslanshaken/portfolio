import { Navbar, Nav, Container, Button } from "react-bootstrap";
import React from "react";
import { Avatar } from '@mui/material';
import Ava from "../../assets/copy.jpg";
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Header() {
  return (
    <Navbar expand="xl" fixed="top" bg="light" className="gap-3 px-3" variant="light">
      <Container className="align-items:center text-white">
        <Navbar.Brand href="#home">
        <Avatar>ASLAN SHAKEN</Avatar>
        </Navbar.Brand>
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
