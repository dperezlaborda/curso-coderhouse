import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/itemListContainer.css';
import ItemList from './ItemList';
import { getFirestore } from "../firebaseConfig";

// const allProducts = [   //array global
//     {
//         category: "sillas",
//         id: 1,
//         title: "Silla DSW",
//         price: 3800,
//         picture: "https://images.unsplash.com/photo-1560830889-96266c6dbe96?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80"
//     },
//     {
//         category: "sillas",
//         id: 2,
//         title: "Silla DSW-apoyabrazos",
//         price: 4100,
//         picture: "https://images.unsplash.com/photo-1589584649628-b597067e07a3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80"
//     },
//     {
//         category: "sillas",
//         id: 3,
//         title: "Silla Icon",
//         price: 6800,
//         picture: "https://images.unsplash.com/photo-1506326426992-32b61983f2fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80"
//     },
//     {
//         category: "escritorios",
//         id: 4,
//         title: "Escritorio Bla",
//         price: 5000,
//         picture: "https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
//     },
//     {
//         category: "escritorios",
//         id: 5,
//         title: "Escritorio Smith",
//         price: 7000,
//         picture: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
//     },
//     {
//         category: "escritorios",
//         id: 6,
//         title: "Escritorio Tom",
//         price: 8500,
//         picture: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"
//     },
//     {
//         category: "deco",
//         id: 7,
//         title: "Espejo Blake",
//         price: 9000,
//         picture: "https://images.unsplash.com/photo-1552454799-ca5cfdc612c8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
//     },
//     {
//         category: "deco",
//         id: 8,
//         title: "Florero",
//         price: 3000,
//         picture: "https://images.unsplash.com/photo-1467384416633-79fcb9a90309?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
//     },
//     {
//         category: "deco",
//         id: 9,
//         title: "Florero",
//         price: 8500,
//         picture: "https://images.unsplash.com/photo-1467384416633-79fcb9a90309?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
//     }
// ]

const ItemListContainer = () => {     //se filtra por categorias

    const [list, setList] = useState([]);   //creo el estado
    const { category } = useParams();

    useEffect(() => {   //creo el efecto con la promesa 
        const db = getFirestore();
        let docs;

        if (category) {
            docs = db.collection("items").where("category", "==", category);
        } else {
            docs = db.collection("items");
        }

        docs.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log("No se encontraron resultados");
            }
            const documents = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setList(documents);
        })
            .catch(err => {
                console.log(err);
            })
        //console.log(list);
    }, [category]);

    return (
        <section id="greeting">
            <h2 className="greeting-title">Bienvenido</h2>
            <p className="greeting-txt"> ipsum dolor sit amet, consectetur adipiscing elit. Ut vel leo in ex tristique rhoncus.</p>
            <ItemList list={list} />
        </section>
    )
}

export default ItemListContainer;

