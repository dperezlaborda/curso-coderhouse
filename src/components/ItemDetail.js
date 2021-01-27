import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import ItemCount from './ItemCount';


import '../styles/itemDetail.css';

const ItemDetail = ({ itemFire }) => {

    //const { title, price, description, picture, color, width, height, material, stock } = detail;
    const [counter, setCounter] = useState(1);
    const [bttnText, setBttnText] = useState(true); //Cambia el texto del boton

    //se suma el producto
    const addProduct = (stock) => {
        if (counter < stock)
            setCounter(counter + 1);
    }

    //se elimina el producto
    const removeProduct = () => {
        if (counter !== 1)
            setCounter(counter - 1)
    }

    return (
        <section id="item-detail">
            <Container>
                <Row>
                    <Col lg="6" className="item-image">
                        <img className="img-fluid" src={itemFire.picture} alt="producto de" />
                    </Col>
                    <Col lg="5" className="item-info">
                        <div className="item-txt">
                            <h3>{itemFire.title}</h3>
                            <h2>$ {itemFire.price}</h2>
                            <p>
                                {itemFire.description}
                            </p>
                        </div>
                        <div className="item-card-area">
                            <ItemCount counter={counter}
                                setCounter={setCounter}
                                addProduct={addProduct}
                                removeProduct={removeProduct}
                                stock={itemFire.stock} bttnText={bttnText}
                                setBttnText={setBttnText} />
                        </div>
                    </Col>
                    <Col className="item-specification">
                        <Table>
                            <tbody>
                                <tr>
                                    <td className="bold">Color</td>
                                    <td>{itemFire.color}</td>
                                </tr>
                                <tr>
                                    <td className="bold">Ancho</td>
                                    <td>{itemFire.width}</td>
                                </tr>
                                <tr>
                                    <td className="bold">Altura</td>
                                    <td>{itemFire.height}</td>
                                </tr>
                                <tr>
                                    <td className="bold">Material</td>
                                    <td>{itemFire.material}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ItemDetail;
