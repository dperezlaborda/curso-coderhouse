import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/cartItem.css';

const CartItem = ({ title, price, picture, amount, id }) => {

    const { removeItem } = useContext(CartContext);

    //se suma cada producto 

    return (
        <tbody>
            <tr>
                <td>
                    <div className="d-flex align-items-start media">
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
    )
}

export default CartItem;
