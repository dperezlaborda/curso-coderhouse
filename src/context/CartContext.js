import React, { useState } from "react";

export const CartContext = React.createContext(); //se crea el contexto

const CartProvider = ({ children }) => {  //esta llamo en App

    const [cart, setCart] = useState([]);

    //Primero busco x id si el producto esta en el carrito
    const isInCart = (id) => {
        const exist = cart.find(product => product.id === id)
        console.log(id);
        if (exist !== undefined) {
            return true;
        } else {
            return false;
        }
    }

    //Agrega el producto al carrito
    const addItem = (item, counter, id) => {
        if (isInCart(id)) {
            const isIn = cart.find(prod => prod.id === id)
            const quantity = isIn.amount + counter;
            const nProduct = { id: isIn.id, title: isIn.title, picture: isIn.picture, price: isIn.price, amount: quantity }
            const deleteProduct = cart.filter(prod => prod.id !== id);
            const completeCart = [...deleteProduct, nProduct]
            setCart(completeCart)
        } else {
            setCart([...cart, { id: item.id, title: item.title, picture: item.picture, price: item.price, amount: counter }])
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