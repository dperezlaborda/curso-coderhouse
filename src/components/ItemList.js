import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Item from './Item';

const ItemList = ({ list }) => { //traigo el array

    return (
        <Container>
            <Row>
                {list.length > 0
                    ? list.map(p => {
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
