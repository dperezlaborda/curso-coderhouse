import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {

    const { cart } = useContext(CartContext);

    const totalProduct = cart.reduce((acu, cur) => acu + cur.amount, 0)

    return (
        <>
            <FontAwesomeIcon icon={faShoppingCart} className="icon" />
            {cart.length !== 0 &&
                <span>{totalProduct}</span>
            }
        </>
    )
}

export default CartWidget;