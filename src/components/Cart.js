import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import '../styles/cart.css';
import Table from 'react-bootstrap/Table';
import { getFirestore } from "../firebaseConfig";
import firebase from 'firebase/app';

const Cart = () => {  //aca voy a usar el contexto

    const { cart, clearCart } = useContext(CartContext);

    const totalCart = cart.reduce((acumulador, current) => acumulador + current.price * current.amount, 0) //sumo el total de cart, cada producto

    const [openForm, setOpenForm] = useState(false);
    const [name, setName] = useState("");
    const [tel, setTel] = useState("");
    const [email, setEmail] = useState("");

    const handleBuy = (e) =>{
        e.preventDefault();
        const order = {
            buyer: {name, tel, email},
            items: cart,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            totalCart: totalCart
        }

        console.log(order);  //lo guarda 
        
        const db = getFirestore();
        const collection = db.collection("orders"); //se crea automaticamente

        collection
        .add(order)   
        .then((res) => {
            console.log(res);
        })
        .catch((err) =>{
            console.log(err);
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
            {cart.length !== 0 && cart.map((product, i) => {
                return (
                    <CartItem
                        key={i}
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
            <>
                <p>Subtotal: {totalCart}</p>
                <Button onClick={clearCart} className="text-uppercase addCart-btn counter-bttn noShadow">Eliminar todo</Button>
                <Button onClick={()=> {setOpenForm(true)}} >Me lo llevo!</Button>
            </>
            }
            {openForm && 
            <>
                <h2>Datos de compra</h2>
                <form onSubmit={handleBuy}>
                    <input onChange={e => setName(e.target.value)} type="text" placeholder="nombre" value={name} />
                    <input onChange={e => setTel(e.target.value)} type="tel" placeholder="telefono" value={tel} />
                    <input onChange={e => setEmail(e.target.value)} type="email" placeholder="email" value={email} />
                    <button onClick={handleBuy}>Pagar</button>
                </form>
            </>
            }
        </Container>
    );
}

export default Cart;