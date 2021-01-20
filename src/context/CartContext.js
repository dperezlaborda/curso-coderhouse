import React, { createContext, useState, useEffect } from 'react';

const CartContext = createContext(); //se maneja la logica, Provider(que tiene que encapsular el padre, seria App) 

const CartProvider = ({ children }) => { //funciones y estado

    //los estados
    const [cart, setCart] = useState([]);    //cart[] 
    const [cartItems, setCartItems] = useState(0);
    const [total, setTotal] = useState(0);

    // Cada vez que se modifique el carrito corro el total nuevamente
    useEffect(() => {
        var t = 0
        // Con el map obtengo el total por producto
        const totals = cart.map( p => p.price * p.amount)
        // Sumo a t el total por producto de cada uno
        totals.map( p => t = t + p)
        // Lo guardo en el estado
        setTotal(t)
        // Calculo la cantidad de productos
        const cartQuantity = cart.length
        // Las guardo en el estado
        setCartItems(cartQuantity)
    }, [cart])

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
            const newProduct = { id: product.id, name: product.name, image: product.image, price: product.price, quantity: 1 }
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
        <CartContext.Provider value={{cart, cartItems, total, addItem, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;