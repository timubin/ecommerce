import React from "react";

import { Navbar, Container, Nav } from "react-bootstrap";
const Manu = () => {
  return (
    <div className="manu">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Mubin</Navbar.Brand>
          <Nav className="mx-auto mamuItem">
            <Nav.Link href="/home" className="text-light">
              Home
            </Nav.Link>
            <Nav.Link href="/about" className="text-light">
              About Us
            </Nav.Link>
            <Nav.Link href="/portfolio" className="text-light">
              Portfolio
            </Nav.Link>
            <Nav.Link href="/contact" className="text-light">
              Contact Us
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Manu;
