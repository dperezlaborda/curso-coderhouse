import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import '../styles/cart.css';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { getFirestore } from "../firebaseConfig";
import firebase from 'firebase/app';
import { FormControl, FormGroup } from 'react-bootstrap';

const Cart = () => {  //aca voy a usar el contexto

    const { cart, clearCart } = useContext(CartContext);

    const totalCart = cart.reduce((acumulador, current) => acumulador + current.price * current.amount, 0) //sumo el total de cart, cada producto

    const [openForm, setOpenForm] = useState(false);
    const [name, setName] = useState("");
    const [tel, setTel] = useState("");
    const [email, setEmail] = useState("");

    const [validated, setValidated] = useState(false);

    const handleBuy = (event) =>{

        const form = event.currentTarget;
        if(form.checkValidity() === false){
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
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
                <Button onClick={()=> {setOpenForm(true)}} className="text-uppercase noShadow bttn-checkout">Me lo llevo!</Button>
                {openForm &&
                    <div className="my-5">
                        <h3 className="cart-title text-uppercase">Datos de compra</h3>
                        <Form noValidate validated={validated} onSubmit={handleBuy}>
                            <FormGroup>
                                <FormControl onChange={e => setName(e.target.value)} required type="text" placeholder="Tu nombre" name="name" value={name}></FormControl>
                                <FormControl.Feedback type="invalid">Falta tu nombre</FormControl.Feedback>
                            </FormGroup>
                            <FormGroup>
                                <FormControl onChange={e => setTel(e.target.value)} required type="tel" placeholder="Telefono" name="tel" value={tel}></FormControl>
                                <FormControl.Feedback type="invalid">Falta tu telefono</FormControl.Feedback>
                            </FormGroup>
                            <FormGroup>
                                <FormControl onChange={e => setEmail(e.target.value)} required type="email" placeholder="Tu email" name="email" value={email}></FormControl>
                                <FormControl.Feedback type="invalid">Falta tu email</FormControl.Feedback>
                            </FormGroup>
                            <Button className="text-uppercase noShadow bttn-checkout" type="submit">Pagar</Button>
                        </Form>
                    </div>
                }
            </Container>
    )
}

export default Cart;