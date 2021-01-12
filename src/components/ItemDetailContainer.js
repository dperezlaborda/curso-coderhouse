import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';

const chairs = [   //array global
    {
        id: 1001,
        title: "Silla DSW",
        price: 3800,
        description: "La DSW se integrará perfectamente al acondicionamiento de su cocina pero también a su sala comedor durante sus reuniones de familia.",
        picture: "https://images.unsplash.com/photo-1560830889-96266c6dbe96?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80",
        color: "Blanco / Negro",
        width: "46 cm",
        height: "83,5 cm",
        profundidad: "40 cm",
        material: "Plástico y Madera de arce",
        stock: 15
    },
    {
        id: 1002,
        title: "Silla DSW-apoyabrazos",
        price: 4100,
        description: "La DSW se integrará perfectamente al acondicionamiento de su cocina pero también a su sala comedor durante sus reuniones de familia.",
        picture: "https://images.unsplash.com/photo-1589584649628-b597067e07a3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80",
        color: "Blanco / Negro",
        width: "46 cm",
        height: "83,5 cm",
        profundidad: "40 cm",
        material: "Plástico y Madera de arce",
        stock: 20
    },
    {
        id: 1003,
        title: "Silla Tulip",
        price: 6000,
        description: "Se destaca por desprenderse de la ideas de patas.El detalle de personalización de cada pieza lo aporta el tapizado, que tiene todas las variantes que las telas puedan aportar",
        picture: "https://desillas.com/img/productos/silla-tulip-45.jpg",
        color: "Blanco / Gris",
        width: "50 cm",
        height: "80 cm",
        profundidad: "40 cm",
        material: "Fibra de vidrio y Aluminio",
        stock: 10
    }
]

const ItemDetailContainer = ({ id }) => {

    const [product, setProduct] = useState() //guardo un solo elemento

    useEffect((/*id = 1003*/) => {  //funciona ok, trae el id (despues borrar)
        let detailProduct = new Promise((res, rej) => {
            setTimeout(() => {
                res(
                    chairs.find(chair => chair.id === id)  //Aparece cargando porq no estoy llamando a ningun id en particular. 
                )
                rej("Se rechazo")
            }, 2000)
        })
        detailProduct.then(res => {
            setProduct(res)
        }).catch(err => {
            console.log("no anda bien")
        })
    }, [id]);

    return (
        <div>
            {product ?
                <ItemDetail
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    picture={product.picture}
                    color={product.color}
                    width={product.width}
                    height={product.height}
                    profundidad={product.profundidad}
                    material={product.material} />
                : <h2>Cargando...</h2>}
        </div>
    )
}

export default ItemDetailContainer;
