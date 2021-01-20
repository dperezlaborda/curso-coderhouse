import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import '../styles/itemCount.css';

const ItemCount = ({ counter, addProduct, removeProduct, onAdd, stock, bttnText }) => {

    return (
        <>
            <p className="stock">Stock disponible: {stock}</p>  {/*visualizar el stock de cada item*/}
            <Row>
                <Col className="counter">
                    <Button onClick={addProduct} className="noShadow counter-bttn">
                        <FontAwesomeIcon icon={faPlus} />
                    </Button>
                    <p className="quantity">{counter}</p>
                    <Button onClick={removeProduct} className="noShadow counter-bttn">
                        <FontAwesomeIcon icon={faMinus} />
                    </Button>
                </Col>
                <Col className="addCart">
                    {bttnText ?
                        <Button onClick={onAdd} className="text-uppercase addCart-btn noShadow counter-bttn">Agregar al carrito</Button>
                        :
                        <Link to="/cart">
                            <Button className="text-uppercase addCart-btn noShadow counter-bttn">Terminar compra</Button>
                        </Link>
                    }
                </Col>
            </Row>
        </>
    )
}

export default ItemCount;
