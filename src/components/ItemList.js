import React from 'react';
import Item from './Item';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const ItemList = ({ products }) => { //traigo el array

    return (
        <Container>
            <Row>
                {products.length > 0
                    ? products.map(product => {
                        return (
                            <Item key={product.id}
                                id={product.id}   //RE IMPORTANTE
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
