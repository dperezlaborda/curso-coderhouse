import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import '../styles/itemCount.css';

const ItemCount = ({ counter, addProduct, removeProduct, addCart, stock }) => {
    return (
        <>
            <p className="stock">Stock disponible: {stock}</p>
            <Row>
                <Col className="counter">
                    <Button onClick={addProduct} className="noShadow">
                        <FontAwesomeIcon icon={faPlus} />
                    </Button>
                    <p className="quantity">{counter}</p>
                    <Button onClick={removeProduct} className="noShadow">
                        <FontAwesomeIcon icon={faMinus} />
                    </Button>
                </Col>
                <Col className="addCart">
                    <Button onClick={addCart} className="text-uppercase addCart-btn noShadow">agregar al carrito</Button>
                </Col>
            </Row>
        </>
    )
}

export default ItemCount;
