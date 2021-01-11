import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import ItemCount from './ItemCount';
import fotito from '../images/chairDSW.jpg'

import '../styles/itemDetail.css';

const ItemDetail = ({ id, title, price, description, picture, color, width, height, profundidad, material }) => {

    return (
        <section id="item-detail">
            <Container>
                <Row>
                    <Col lg="6" className="item-image">
                        <img className="img-fluid" src={picture} alt="producto de" />
                    </Col>
                    <Col lg="5" className="item-info">
                        <div className="item-txt">
                            <h3>{title}</h3>
                            <h2>$ {price}</h2>
                            <p>
                                {description}
                            </p>
                        </div>
                        <div className="item-card-area">
                            <ItemCount stock={10} />
                        </div>
                    </Col>
                    <Col className="item-specification">
                        <Table>
                            <tbody>
                                <tr>
                                    <td className="bold">Color</td>
                                    <td>{color}</td>
                                </tr>
                                <tr>
                                    <td className="bold">Ancho</td>
                                    <td>{width}</td>
                                </tr>
                                <tr>
                                    <td className="bold">Altura</td>
                                    <td>{height}</td>
                                </tr>
                                <tr>
                                    <td className="bold">Profundidad</td>
                                    <td>{profundidad}</td>
                                </tr>
                                <tr>
                                    <td className="bold">Material</td>
                                    <td>{material}</td>
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
