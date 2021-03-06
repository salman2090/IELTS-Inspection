import React from 'react';
// import boostrap components
import { Container, Nav, Navbar} from 'react-bootstrap';
// import react router components
import { NavLink } from 'react-router-dom';
// import custom stylesheet
import './Header.css';

const Header = () => {
    
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container className="nav-container">
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