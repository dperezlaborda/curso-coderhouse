import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import bgHero from '../images/hero-1.jpg';
import { Link } from 'react-router-dom';

import '../styles/hero.css';

const Hero = ({ sectionTitle }) => {  //pasar x props el titulo de cada hero
    return (
        <Container fluid id="hero-banner">
            <Row className="bg d-flex align-items-center justify-content-center">
                <img src={bgHero} alt="background" />
                <Container className="text-hero text-center">
                    <h1 className="title-hero text-uppercase">{sectionTitle}</h1>
                    <p className="sub-hero">Donec porta, ipsum eu maximus porttitor, tortor tellus finibus sem, nec tempus mi urna vel tortor. Aliquam sit amet feugiat turpis. Pellentesque at. </p>
                    <Link to="/">
                        <Button>Shop Now</Button>
                    </Link>
                </Container>
            </Row >
        </Container >
    )
}

export default Hero; 