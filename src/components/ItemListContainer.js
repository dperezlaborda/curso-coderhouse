import React from 'react';
import '../styles/itemListContainer.css';
import ItemList from './ItemList';

const chairs = [   //array global
    {
        id: 1001,
        title: "Silla DSW",
        price: 3800,
        picture: "https://images.unsplash.com/photo-1560830889-96266c6dbe96?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80"
    },
    {
        id: 1002,
        title: "Silla DSW-apoyabrazos",
        price: 4100,
        picture: "https://images.unsplash.com/photo-1589584649628-b597067e07a3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80"
    },
    {
        id: 1004,
        title: "Silla Tulip",
        price: 6000,
        picture: "https://desillas.com/img/productos/silla-tulip-45.jpg"
    }
]


const ItemListContainer = ({ greeting, name }) => {

    return (
        <section id="greeting">
            <h2 className="greeting-title">{greeting}!</h2>
            <p className="greeting-txt">{name} ipsum dolor sit amet, consectetur adipiscing elit. Ut vel leo in ex tristique rhoncus.</p>
            <ItemList chairs={chairs} />
        </section>
    )
}

export default ItemListContainer;
