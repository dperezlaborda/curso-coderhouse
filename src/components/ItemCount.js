import React, { useState, useContext } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import '../styles/itemCount.css';
import { CartContext } from '../context/CartContext';

const ItemCount = ({ id, stock, bttnText, setBttnText }) => {

    const { addItem } = useContext(CartContext); //traigo del contexto la funcion addItem
    const [counter, setCounter] = useState(1);

    //se suma el producto
    const addProduct = () => {
        if(counter < stock){
            setCounter(counter + 1);
        }
    }

    //se elimina el producto
    const removeProduct = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    const addToCart = (counter, id) => {
        addItem(counter, id)   //agrego el item al carrito
        setBttnText(false);   //traigo el texto de Terminar Compra
    }

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
                        <Button onClick={ ()=> addToCart() } className="text-uppercase addCart-btn noShadow counter-bttn">Agregar al carrito</Button>
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