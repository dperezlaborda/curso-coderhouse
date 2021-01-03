import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import '../styles/navbar2.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../images/logo.png';
import CartWidget from './CartWidget';

const NavBar2 = () => {
    return (
        <header id="header-area">
            <div className="main-menu">
                <Navbar expand="lg" fixed="top" className="navbar-dark">
                    <Container>
                        <div className="logo">
                            <Navbar.Brand>
                                <img src={logo} alt="logo en mobile" width="70" height="50" />
                            </Navbar.Brand>
                        </div>
                        <div className="logo2">
                            <Navbar.Brand>
                                <img src={logo} alt="logo en mobile" width="70" height="50" />
                            </Navbar.Brand>
                        </div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler ml-auto" />
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
                            <Nav>
                                <Nav.Link>
                                    <FontAwesomeIcon icon={faSearch} />
                                </Nav.Link>
                                <Nav.Link>
                                    <CartWidget />
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </header >
    )
}

export default NavBar2;
