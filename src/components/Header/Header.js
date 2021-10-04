import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className="fw-bold fs-3" to="/home">IELTS Inspection</Navbar.Brand>
                    <Nav className="navBar">
                        <NavLink className="nav" to="/home">Home</NavLink>
                        <NavLink className="nav" to="/services">Services</NavLink>
                        <NavLink className="nav" to="/about">About</NavLink>
                        <NavLink className="nav" to="/contacts">Contact Us</NavLink>
                    </Nav>
                </Container>
            </Navbar>
  
        </div>
    );
};

export default Header;