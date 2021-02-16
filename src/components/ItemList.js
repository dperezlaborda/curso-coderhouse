import React from 'react';
//bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//components
import Item from './Item';
import Loader from './Loader';

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
                    ) : <Loader />}  
            </Row>
        </Container>
    )
}

export default ItemList;
