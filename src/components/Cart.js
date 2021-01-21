import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';

const Cart = () => {  //aca voy a usar el contexto

    const { cart } = useContext(CartContext);  //tengo un inconveniente con el Array del Cart

    return (
        <div>

            {
                cart.map(product => {
                    return (
                        <CartItem
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            picture={product.picture}
                            amount={product.amount}
                        />
                    )
                })
            }


        </div>
    )
}

export default Cart;
