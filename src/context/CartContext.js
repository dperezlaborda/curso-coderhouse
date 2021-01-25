import React, { useState, } from "react";

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

    //Agregar item al array de cart
    const addItem = (product, counter) => {
        if (isInCart(product.id)) {
            const productFinder = cart.find(prod => prod.id === product.id)
            const nQuantity = productFinder.amount + counter
            const nProduct = { id: productFinder.id, title: productFinder.title, picture: productFinder.picture, price: productFinder.price, amount: nQuantity }
            const deleteProduct = cart.filter(prod => prod.id != product.id);
            const completeCart = [...deleteProduct, nProduct]
            setCart(completeCart)
        } else {
            const products = { id: product.id, title: product.title, picture: product.picture, price: product.price, amount: counter }
            setCart([...cart, products]);
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