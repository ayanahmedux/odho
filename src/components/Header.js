import React from 'react'
import image1 from '../images/logo.png';
import { Container, Nav, Navbar } from 'react-bootstrap';

 
const Header = () => {  
        return (
          <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="#home"><img src={image1} alt=''/></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto gravity-navbar">
                  <Nav.Link href="#home">ABOUT</Nav.Link>
                  <Nav.Link href="#link"> CAREERS</Nav.Link>
                    <Nav.Link href="#link">CONTACT</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        );
      }
      
            

export default Header;
