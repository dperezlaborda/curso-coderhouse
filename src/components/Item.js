import React, { useContext } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../context/CartContext';
import '../styles/item.css';

const Item = ({ id, title, price, picture }) => {

    const { addItem } = useContext(CartContext);

    const agrego = (id) =>{
        addItem(id); //NO ANDA 
    }

    return (
        <Col>
            <Card>
                <div className="img-wrapper">
                    <Card.Img src={picture} alt={`foto de ${title}`} />
                    <ul className="img-overlay d-flex justify-content-center">
                        <li>
                            <Link to={`/product/${id} `}>
                                <Button className="bttn-overlay noShadow">
                                    <FontAwesomeIcon icon={faSearchPlus} />
                                </Button>
                            </Link>
                        </li>
                        <li>
                            <Button onClick={()=> agrego(id)} className="bttn-overlay noShadow">
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </Button>
                        </li>
                    </ul>
                </div>
                <Card.Body>
                    <Card.Title className="text-center">{title}</Card.Title>
                    <p className="text-center price mt-2">
                        <strong>${price}</strong>
                    </p>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Item;
