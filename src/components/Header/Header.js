import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Ielts Inspection</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink activeStyle={activeStyle} to="/home">Home</NavLink>
                        <NavLink activeStyle={activeStyle} to="/services">Services</NavLink>
                        <NavLink activeStyle={activeStyle} to="/about">About</NavLink>
                        <NavLink activeStyle={activeStyle} to="/contactUs">Contact Us</NavLink>
                    </Nav>
                </Container>
            </Navbar>


            <NavLink activeStyle={activeStyle} to="/home">Home</NavLink>
            <NavLink activeStyle={activeStyle} to="/services">Services</NavLink>
            <NavLink activeStyle={activeStyle} to="/about">About</NavLink>
            <NavLink activeStyle={activeStyle} to="/about/contactUs">Contact Us</NavLink>
        </div>
    );
};

export default Header;