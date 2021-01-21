import React from 'react';


const CartItem = ({ title, price, picture, amount }) => {
    //llamar contexto //Faltaría llamar el ID

    return (
        <div>
            <h3>{title}</h3>
            <h3>U$D{price}</h3>
            <h3>{picture}</h3>
            <h3>{amount}</h3>

        </div>
    )
}

export default CartItem;
