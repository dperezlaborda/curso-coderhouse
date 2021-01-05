import React from 'react';
import bg from '../images/hero-bg.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import '../styles/hero.css';

const Hero = () => {
    return (
        <Container fluid id="hero-banner">
            <Row className="bg-container py-5"
                style={{
                    backgroundImage: `url(${bg})`
                }}>
                <div className="overlay"></div>
                <Container className="text-banner">
                    <h3 className="title-banner">Shop is fun</h3>
                    <p className="sub-banner">Donec porta, ipsum eu maximus porttitor, tortor tellus finibus sem, nec tempus mi urna vel tortor. Aliquam sit amet feugiat turpis. Pellentesque at sapien eu sapien commodo semper. </p>
                </Container>
            </Row>
        </Container >
    )
}

export default Hero;
