import React, { useState } from 'react';
import '../styles/itemListContainer.css';
import ItemCount from './ItemCount.js';

const ItemListContainer = ({ greeting, name, max = 10 }) => { //despues se saca el max de aca.

    const [counter, setCounter] = useState(1);

    const addProduct = () => {
        if (counter < max)
            setCounter(counter + 1);
    }

    const removeProduct = () => {
        if (counter !== 1) {
            setCounter(counter - 1)
        } else {
            console.log("no se puede")
        }
    }

    return (
        <section id="greeting">
            <h2 className="greeting-title">{greeting}!</h2>
            <p className="greeting-txt">{name} ipsum dolor sit amet, consectetur adipiscing elit. Ut vel leo in ex tristique rhoncus.</p>
            <ItemCount
                counter={counter}
                addProduct={addProduct}
                removeProduct={removeProduct}
                stock={10}
            />
        </section>
    )
}

export default ItemListContainer;