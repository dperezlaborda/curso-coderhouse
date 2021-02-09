import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import '../styles/cart.css';
import Table from 'react-bootstrap/Table';
import { getFirestore } from "../firebaseConfig";
import firebase from 'firebase/app';

const Cart = () => {  //aca voy a usar el contexto

    const { cart } = useContext(CartContext);

    //const total = cart.reduce((acumulador, current) => acumulador + current.price * current.amount, 0) //sumo el total de cart, cada producto

    const [carrito, setCarrito] = useState([]);
    const [name, setName] = useState("");
    const [tel, setTel] = useState("");
    const [email, setEmail] = useState("");
    const [total, setTotal] = useState(0);

    const handleCart = ({ id, price, title }) => {
        setCarrito([...carrito, { id, price, title }])
        setTotal(total + price);
    }
    const handleBuy = (e) => {
        e.preventDefault();
        const order = {
            buyer: { name, tel, email },
            items: carrito,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total
        }
        const db = getFirestore();
        const collection = db.collection("orders");
        collection.add(order)
            .then((res) => {  //deberia devolver el id 
                console.log(res);
            }).catch((err) => {
                console.log(err)
            })
    }

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

            <button onClick={() => handleCart()}></button>
            <h2>Datos de compra</h2>
            <form onSubmit={handleBuy}>
                <input onChange={e => setName(e.target.value)} type="text" placeholder="nombre" value={name} />
                <input onChange={e => setTel(e.target.value)} type="tel" placeholder="telefono" value={tel} />
                <input onChange={e => setEmail(e.target.value)} type="email" placeholder="email" value={email} />
                <button>Comprar</button>
            </form>
        </Container>
    )
}

export default Cart;