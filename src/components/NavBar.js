import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/logo.png';
import CartWidget from './CartWidget';
import '../styles/navbar.css';

const NavBar = () => {
    return (
        <header id="header-area">
            <Navbar expand="md" fixed="top" className="navbar-dark px-4">
                <Navbar.Brand href="#home">
                    <img src={logo} alt="logo de brand" className="d-inline-block align-top" width="70" height="50" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler ml-auto" />
                <CartWidget />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#ofertas">Descuentos</Nav.Link>
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Sillas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Mesas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Escritorios</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Decoración</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#contact">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header >
    )
}

export default NavBar;




