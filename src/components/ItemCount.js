import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import '../styles/ItemCount.css';
import Container from 'react-bootstrap/Container';

const ItemCount = ({ counter, addProduct, removeProduct, stock }) => {

    return (
        <Container>
            <p className="mt-5">Silla Wassily</p>
            <p>Stock disponible: {stock}</p>
            <Row className="mx-3">
                <Col xs={4} md={3} lg={2} className="px-4 d-flex justify-content-center counter">
                    <Row className="bttn-border">
                        <Button onClick={addProduct} className="noShadow">
                            <FontAwesomeIcon icon={faPlus} />
                        </Button>
                        <p className="quantity">{counter}</p>
                        <Button onClick={removeProduct} className="noShadow">
                            <FontAwesomeIcon icon={faMinus} />
                        </Button>
                    </Row>
                </Col>
                <Col xs={4} md={9} lg={10} className="addCart">
                    <Button className="text-uppercase addCart-btn noShadow">agregar al carrito</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default ItemCount;
