import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const details = [   //array global
    {
        category: "sillas",
        id: 1,
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
        category: "sillas",
        id: 2,
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
        category: "sillas",
        id: 3,
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
    },
    {
        category: "escritorios",
        id: 4,
        title: "Escritorio Bla",
        price: 5000,
        description: "Se destaca por desprenderse de la ideas de patas.El detalle de personalización de cada pieza lo aporta el tapizado, que tiene todas las variantes que las telas puedan aportar",
        picture: "https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        color: "Blanco / Gris",
        width: "50 cm",
        height: "80 cm",
        profundidad: "40 cm",
        material: "Hierro",
        stock: 10
    },
    {
        category: "escritorios",
        id: 5,
        title: "Escritorio Smith",
        price: 7000,
        description: "Se destaca por desprenderse de la ideas de patas.El detalle de personalización de cada pieza lo aporta el tapizado, que tiene todas las variantes que las telas puedan aportar",
        picture: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        color: "Blanco / Gris",
        width: "150 cm",
        height: "40 cm",
        profundidad: "40 cm",
        material: "Madera paraiso",
        stock: 25
    },
    {
        category: "escritorios",
        id: 6,
        title: "Escritorio Tom",
        price: 8500,
        description: "Se destaca por desprenderse de la ideas de patas.El detalle de personalización de cada pieza lo aporta el tapizado, que tiene todas las variantes que las telas puedan aportar",
        picture: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80",
        color: "Negro / Blanco",
        width: "150 cm",
        height: "40 cm",
        profundidad: "40 cm",
        material: "Madera paraiso",
        stock: 40
    },
    {
        category: "deco",
        id: 7,
        title: "Espejo Blake",
        price: 9000,
        description: "Se destaca por desprenderse de la ideas de patas.El detalle de personalización de cada pieza lo aporta el tapizado, que tiene todas las variantes que las telas puedan aportar",
        picture: "https://images.unsplash.com/photo-1552454799-ca5cfdc612c8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
        color: "Gris / Blanco / Negro",
        width: "110 cm",
        height: "40 cm",
        profundidad: "40 cm",
        material: "Marco de Hierro",
        stock: 100
    },
    {
        category: "deco",
        id: 8,
        title: "Florero",
        price: 3000,
        description: "Se destaca por desprenderse de la ideas de patas.El detalle de personalización de cada pieza lo aporta el tapizado, que tiene todas las variantes que las telas puedan aportar",
        picture: "https://images.unsplash.com/photo-1467384416633-79fcb9a90309?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        color: "A elección",
        width: "60 cm",
        height: "80 cm",
        profundidad: "40 cm",
        material: "Ceramica",
        stock: 120
    },
    {
        category: "deco",
        id: 9,
        title: "Florero",
        price: 8500,
        description: "Se destaca por desprenderse de la ideas de patas.El detalle de personalización de cada pieza lo aporta el tapizado, que tiene todas las variantes que las telas puedan aportar",
        picture: "https://images.unsplash.com/photo-1467384416633-79fcb9a90309?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        color: "A elección",
        width: "60 cm",
        height: "80 cm",
        profundidad: "40 cm",
        material: "Ceramica",
        stock: 120
    }
]


const ItemDetailContainer = () => {   //otro array

    const [detail, setDetail] = useState([])   //guardo un solo elemento
    const { id } = useParams()

    useEffect(() => {  //funciona ok, trae el id (despues borrar)
        const detailProduct = new Promise((res, rej) => {
            setTimeout((loading) => {
                return res(
                    details.filter(product => product.id === Number(id))[0]
                );
            }, 2000)
        })
        detailProduct.then(res => {
            setDetail(res)
            console.log(res)
        }).catch(err => {
            console.log("no anda bien")
        })

    }, [id]);

    return (
        <div>
            {detail
                ? <ItemDetail
                    id={detail.id}
                    title={detail.title}
                    price={detail.price}
                    description={detail.description}
                    picture={detail.picture}
                    color={detail.color}
                    width={detail.width}
                    height={detail.height}
                    profundidad={detail.profundidad}
                    material={detail.material}
                />
                : <h2>Cargando...</h2>
            }
        </div>
    )
}

export default ItemDetailContainer;
