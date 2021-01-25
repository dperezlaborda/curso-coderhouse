import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import '../styles/cart.css';
import Table from 'react-bootstrap/Table';

const Cart = () => {  //aca voy a usar el contexto

    const { cart } = useContext(CartContext);

    const total = cart.reduce((acumulador, current) => acumulador + current.price * current.amount, 0) //sumo el total de cart, cada producto

    return (
        <Container id="cart">
            {cart.length === 0 &&
                <>
                    <h2 className="cart-text">Todavia no agregaste productos a tu carrito.</h2>
                    <h2 className="cart-text text-uppercase d-inline-block mr-1 ">Seguí buscando </h2>
                    <Link to="/" className="cart-link">acá</Link>
                </>
            }
            {cart.length !== 0 &&
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
                </Table>
            }
            {cart.length !== 0 && cart.map(product => {
                return (
                    <CartItem
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        amount={product.amount}
                        picture={product.picture}
                    />

                )
            })
            }
            {cart.length !== 0 &&
                <p>Subtotal: {total}</p>
            }
        </Container>
    )
}

export default Cart;


//pasar la cantidad