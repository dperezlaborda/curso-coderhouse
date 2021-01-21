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

    //Agregar item al array de cart
    const addItem = (id, product, exist) => {
        if (isInCart(id)) { //si el producto existe, le agrego la cantidad y no duplico el producto.
            setCart( //primero loopeo el array de cart
                cart.map(product => //si el id del producto coincide se suma la cantidad 
                    product.id === id ? { ...exist, quantity: exist.quantity + 1 } : product
                )
            )
        } else {
            const newProduct = { id: product.id, title: product.title, picture: product.picture, price: product.price, quantity: 1 }
            setCart([...cart, newProduct]);
        }
    }

    //Remover item del cart (mediante id)
    const removeItem = (id) => {
        const editCart = cart.filter(product => product.id !== id)
        setCart(editCart);
    }

    //remover todos los item de cart
    const clearCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{ cart, isInCart, addItem, removeItem, clearCart }}>
            { children}
        </CartContext.Provider>
    )
}

export default CartProvider;