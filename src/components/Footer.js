import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/fontawesome-free-brands';
import { faTwitter } from '@fortawesome/fontawesome-free-brands';
import { faInstagram } from '@fortawesome/fontawesome-free-brands';

import '../styles/footer.css';

const Footer = () => {
    return (
        <section id="footer-area">
            <Container>
                <Row className="justify-content-between">
                    <Col xl="4" lg="3" md="8" sm="8">
                        <div className="mb-5">
                            <div className="footer-logo mb-3">
                                <a href="#home">
                                    <img alt="logo" src={logo} width="100" height="70" className="ml-n3" />
                                </a>
                            </div>
                            <div className="footer-title">
                                <p className="padding-r">Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
                            </div>
                            <div className="footer-social">
                                <a href="#">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col xl="2" lg="2" md="4" sm="4">
                        <div className="mb-5">
                            <div className="footer-title">
                                <h4>accesos rapidos</h4>
                                <ul>
                                    <li>Descuentos</li>
                                    <li>Best Sellers</li>
                                    <li>Productos</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col xl="2" lg="2" md="4" sm="4" >
                        <div className="mb-5">
                            <div className="footer-title">
                                <h4>Shop</h4>
                                <ul>
                                    <li>Avisos Legales</li>
                                    <li>Terminos y Condiciones</li>
                                    <li>Política Privacidad</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col xl="2" lg="2" md="4" sm="4">
                        <div className="mb-5">
                            <div className="footer-title">
                                <h4>ayuda</h4>
                                <ul>
                                    <li>Medios de Pago</li>
                                    <li>Cambios y Devoluciones</li>
                                    <li>Métodos de Envío</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="footer-bt-area">
                    <Container>
                        <Row>
                            <Col>
                                <p>Copyright ©2021 All rights reserved </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        </section>
    )
}

export default Footer;