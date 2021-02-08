import React, { useState } from "react";

export const CartContext = React.createContext(); //se crea el contexto

const CartProvider = ({ children }) => {  //esta llamo en App

    const [cart, setCart] = useState([]);

    //Primero busco x id si el producto esta en el carrito
    const isInCart = (id) => {
        const exist = cart.find(product => product.id === id)
        if (exist !== undefined) {
            return true;
        } else {
            return false;
        }
    }

    //Agrega el producto al carrito
    const addItem = (product, counter) =>{
        if (isInCart(product.id)) {
            const isIn = cart.find(prod => prod.id === product.id)
            const quantity = isIn.amount + counter;
            const nProduct = { id: isIn.id, title: isIn.title, picture: isIn.picture, price: isIn.price, amount: quantity }
            const deleteProduct = cart.filter(prod => prod.id !== product.id);
            const completeCart = [...deleteProduct, nProduct]
            setCart(completeCart)
        }else{
            setCart([...cart, {id: product.id, title: product.title, picture: product.picture, price: product.price, amount: counter}])
        }
    }

    //Remover item del cart (mediante id)
    const removeItem = (id) => {
        const editCart = cart.filter(product => product.id !== id)
        setCart(editCart);
    }

    //remover todos los item de cart
    // const clearCart = () => {
    //     setCart([]);
    // }

    return (
        <CartContext.Provider value={{ cart, isInCart, addItem, removeItem }}>
            { children}
        </CartContext.Provider>
    )
}

export default CartProvider;