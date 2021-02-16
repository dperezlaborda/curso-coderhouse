import React, { useContext, useState } from 'react';
//contexto
import { CartContext } from '../context/CartContext';
//bootstrap
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table';
//components
import CartItem from './CartItem';
import FormCart from './FormCart';
//router
import { Link } from 'react-router-dom';
//firebase
import { getFirestore } from "../firebaseConfig";
import firebase from 'firebase/app';
//style
import '../styles/cart.css';


const Cart = () => {  //aca voy a usar el contexto

    const { cart, clearCart } = useContext(CartContext);

    const totalCart = cart.reduce((acumulador, current) => acumulador + current.price * current.amount, 0) //sumo el total de cart, cada producto

    const [openForm, setOpenForm] = useState(false);
    const [orderId, setOrderId] = useState(null);

    const handleCheckout = () =>{
        setOpenForm(true);
    }
   
    //funcion para guardar la compra, no funciona porque arrastra error del ItemDetail(id es undefined)
    const submitOrder = (buyer)=>{
        const db = getFirestore();
        const orders = db.collection("orders"); //se crea automaticamente
        const order = {
            buyer,
            items: cart,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            totalCart: totalCart
        }

        console.log(order);  //ok funciona, lo guarda
        orders
        .add(order)   
        .then((res) => {
            setOrderId(res.id);
        })
        .catch((err) =>{
            console.log(err);
        }) 
    }

    if(orderId){
        return(
            <h2>Tu orden de compra es: {orderId}</h2>
        )
    }

    return (
        cart.length === 0 ?
            <Container className="cart">
                <h2 className="cart-text">Todavia no agregaste productos a tu carrito.</h2>
                <h2 className="cart-text text-uppercase d-inline-block mr-1 ">Seguí buscando </h2>
                <Link to="/" className="cart-link">acá</Link>
            </Container>
        :
            <Container className="cart">
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
                    {cart.map((product, i) => {
                        return(
                            <CartItem
                            key={i}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            amount={product.amount}
                            picture={product.picture}
                            />
                        )
                    })}
                </Table>
                <h5 className="d-flex justify-content-end subtotal">Subtotal: {totalCart}</h5>
                <Button onClick={clearCart} className="text-uppercase addCart-btn counter-bttn noShadow">Eliminar todo</Button>
                <Button onClick={handleCheckout} className="text-uppercase noShadow bttn-checkout">Me lo llevo!</Button>
                {openForm ?
                    <FormCart submitOrder={submitOrder}/>
                    :
                    null
                }

            </Container>
    )
}

export default Cart;