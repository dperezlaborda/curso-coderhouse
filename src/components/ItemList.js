import React from 'react';
import Item from './Item';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const ItemList = ({ products }) => { //traigo el array

    return (
        <Container>
            <Row>
                {products.length > 0
                    ? products.map(p => {
                        return (
                            <Item
                                key={p.id}
                                id={p.id}   //RE IMPORTANTE
                                title={p.title}
                                price={p.price}
                                picture={p.picture}
                                category={p.category}
                            />
                        )
                    }
                    ) : <p>Cargando...</p>}   {/* cambiar x animacion */}
            </Row>
        </Container>
    )
}

export default ItemList;
