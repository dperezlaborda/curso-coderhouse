import React, { useEffect, useState } from 'react';
import Item from './Item';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const ItemList = ({ chairs }) => { //traigo el array

    const [products, setProducts] = useState([]);   //creo el estado

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
    }, []);    //no se repite podria estar products, por si se modifican los datos se actualizan

    return (
        <Container>
            <Row>
                {products.length > 0
                    ? products.map(product => {
                        return (
                            <Item key={product.id}
                                title={product.title}
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
