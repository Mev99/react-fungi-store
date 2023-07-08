import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import CartWidget from "./CartWidget";
import ButtonCategoryList from "./buttons/ButtonCategoryList";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div style={{ marginBottom: "5rem" }}>
      <Navbar
        style={{ position: "fixed", zIndex: "1", width: "100%", top: 0 }}
        bg="primary"
        variant="dark"
      >
        <Container>
          <Link to={`/`}><Navbar.Brand>Mushroom Store</Navbar.Brand></Link>
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
