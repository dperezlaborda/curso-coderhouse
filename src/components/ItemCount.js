import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import '../styles/itemCount.css';
import { CartContext } from '../context/CartContext';

const ItemCount = ({ id, counter, stock, bttnText, detail, setBttnText, addProduct, removeProduct }) => {

    const { addItem } = useContext(CartContext); //traigo del contexto la funcion addItem

    const addToCart = () => {
        addItem(detail, counter, id)   //agrego el item al carrito
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
                        <Button onClick={() => addToCart()} className="text-uppercase addCart-btn noShadow counter-bttn">Agregar al carrito</Button>
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
