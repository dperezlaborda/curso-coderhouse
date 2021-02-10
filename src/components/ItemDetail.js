import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import ItemCount from './ItemCount';


import '../styles/itemDetail.css';


const ItemDetail = ({ item }) => {

    const [bttnText, setBttnText] = useState(true); //Cambia el texto del boton

    

    return (
        <section id="item-detail">
            <Container>
                <Row>
                    <Col lg="6" className="item-image">
                        <img className="img-fluid" src={item.picture} alt="producto de" />
                    </Col>
                    <Col lg="5" className="item-info">
                        <div className="item-txt">
                            <h3>{item.title}</h3>
                            <h2>$ {item.price}</h2>
                            <p>
                                {item.description}
                            </p>
                        </div>
                        <div className="item-card-area">
                            <ItemCount
                                stock={item.stock} bttnText={bttnText}
                                setBttnText={setBttnText} item={item} />
                        </div>
                    </Col>
                    <Col className="item-specification">
                        <Table>
                            <tbody>
                                <tr>
                                    <td className="bold">Color</td>
                                    <td>{item.color}</td>
                                </tr>
                                <tr>
                                    <td className="bold">Ancho</td>
                                    <td>{item.width}</td>
                                </tr>
                                <tr>
                                    <td className="bold">Altura</td>
                                    <td>{item.height}</td>
                                </tr>
                                <tr>
                                    <td className="bold">Material</td>
                                    <td>{item.material}</td>
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
