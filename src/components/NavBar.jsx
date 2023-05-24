import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import CartWidget from './CartWidget'
import ItemListContainer from './ItemListContainer'

const NavBar = () => {

  return (
   <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#">Mushroom Store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Features</Nav.Link>
            <ItemListContainer/>
          </Nav>
        <CartWidget/>
        </Container>
      </Navbar>
    </>
    )
}

export default NavBar