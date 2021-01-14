import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import '../styles/itemCount.css';

const ItemCount = ({ max = 10, stock }) => {//despues se saca el max de aca.

    const [counter, setCounter] = useState(1);

    const addProduct = () => {
        if (counter < max)
            setCounter(counter + 1);
    }

    const removeProduct = () => {
        if (counter !== 1)
            setCounter(counter - 1)
    }

    const addCart = () => {
        console.log(counter);
    }

    return (
        <>
            <p className="stock">Stock disponible:{stock}</p>  {/*visualizar el stock de cada item*/}
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
                    <Button onClick={addCart} className="text-uppercase addCart-btn noShadow counter-bttn">agregar al carrito</Button>
                </Col>
            </Row>
        </>
    )
}

export default ItemCount;
