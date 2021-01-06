import React, { useEffect, useState } from 'react';
import Item from './Item';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const ItemList = () => { //map y array

    const [products, setProducts] = useState([]);   //creo el estado

    const chairs = [   //creo el array
        {
            id: 1001,
            title: "Silla DSW",
            description: "plástico y madera",
            price: 3800,
            picture: "https://images.unsplash.com/photo-1560830889-96266c6dbe96?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80"
        },
        {
            id: 1002,
            title: "Silla DSW-apoyabrazos",
            description: "plástico y madera",
            price: 4100,
            picture: "https://images.unsplash.com/photo-1589584649628-b597067e07a3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80"
        },
        {
            id: 1004,
            title: "Silla Tulip",
            description: "fibra de vidrio",
            price: 6000,
            picture: "https://desillas.com/img/productos/silla-tulip-45.jpg"
        }
    ]

    useEffect(() => {   //creo el efecto con la promesa 
        let listProducts = new Promise((res, rej) => {
            setTimeout(() => {
                res(chairs)  //array
                rej("Se rechazo")
            }, 2000)

        })
        listProducts.then(res => {
            setProducts(res)  //state 
        }).catch(err => {
            console.log("No anda")
        })
    }, [])    //no se repite

    return (
        <Container>
            <Row>
                {products.length > 0
                    ? products.map(product => {
                        return (
                            <Item key={product.id}
                                title={product.title}
                                description={product.description}
                                price={product.price}
                                picture={product.picture}
                            />
                        )
                    }
                    ) : <p>Cargando...</p>}   {/* cambiar x animacion */}
            </Row>
        </Container>
    )
}

export default ItemList;
