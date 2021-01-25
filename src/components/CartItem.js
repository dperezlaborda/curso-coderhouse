import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/cartItem.css';

const CartItem = ({ title, price, picture, amount, id }) => {

    const { removeItem } = useContext(CartContext);

    //se suma cada producto 

    return (
        <Table>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th></th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div className="d-flex align-items-start">
                            <img src={picture} alt="fotito" className="imagen-cart" />
                            <p>{title}</p>
                        </div>
                    </td>
                    <td>${price}</td>
                    <td>{amount}</td>
                    <td onClick={() => removeItem(id)}>
                        <FontAwesomeIcon icon={faTrashAlt} className="trash-icon" />
                    </td>
                    <td>${amount * price}</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default CartItem;
