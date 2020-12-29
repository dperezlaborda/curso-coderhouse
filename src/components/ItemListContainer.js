import React from 'react';
import '../styles/itemListContainer.css';

const ItemListContainer = ({ greeting, name }) => {
    return (
        <section id="greeting">
            <h2 className="greeting-title">{greeting}!</h2>
            <p className="greeting-txt">{name} ipsum dolor sit amet, consectetur adipiscing elit. Ut vel leo in ex tristique rhoncus.</p>
        </section>
    )
}

export default ItemListContainer;
