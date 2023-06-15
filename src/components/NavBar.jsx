import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import CartWidget from "./CartWidget";
import ButtonCategoryList from "./buttons/ButtonCategoryList";

const NavBar = () => {
  return (
    <div style={{ marginBottom: "5rem" }}>
      <Navbar
        style={{ position: "fixed", zIndex: "1", width: "100%", top: 0 }}
        bg="primary"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#">Mushroom Store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Features</Nav.Link>
            <ButtonCategoryList />
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
