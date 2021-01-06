import React from 'react'
import Card from 'react-bootstrap/Card';
import '../styles/item.css';

const Item = ({ id, title, description, price, picture }) => {
    return (
        <Card>
            <Card.Img src={picture} alt={`foto de ${title}`} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    Materiales: {description}
                    <p className="text-center mt-2"><strong>${price}</strong></p>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Item;
