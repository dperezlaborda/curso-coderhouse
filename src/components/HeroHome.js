import React from 'react';
import bg from '../images/hero-bg.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import '../styles/heroHome.css';

const HeroHome = () => {

    return (
        <Container fluid id="hero-banner">
            <Row className="bg-container d-flex align-items-center justify-content-center">
                <img src={bg} className="fondo" alt="background" />
                <div className="overlay"></div>
                <Container className="text-banner">
                    <h3 className="small-title-banner">Shop is fun</h3>
                    <h1 className="big-title-banner">Vestibulum consectetur tellus vel</h1>
                    <p className="sub-banner">Donec porta, ipsum eu maximus porttitor, tortor tellus finibus sem, nec tempus mi urna vel tortor. Aliquam sit amet feugiat turpis. Pellentesque at. </p>
                </Container>
            </Row >
        </Container >
    )
}

export default HeroHome;
