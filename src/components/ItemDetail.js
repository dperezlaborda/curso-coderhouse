import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import ItemCount from './ItemCount';
import fotito from '../images/chairDSW.jpg'

import '../styles/itemDetail.css';

const ItemDetail = ({ product, max = 10 }) => {  //despues se saca el max de aca.

    const [counter, setCounter] = useState(1);

    const addProduct = () => {
        if (counter < max)
            setCounter(counter + 1);
    }

    const removeProduct = () => {
        if (counter !== 1)
            setCounter(counter - 1)
    }

    const addCart = () => {
        console.log(counter + 1);
    }

    return (
        <section id="item-detail">
            <Container>
                <Row>
                    <Col lg="6" className="item-image">
                        <img className="img-fluid" src={fotito} alt="producto de" />
                    </Col>
                    <Col lg="5" className="item-info">
                        <div className="item-txt">
                            <h3>Silla DSW</h3>
                            <h2>$ 3800</h2>
                            <p>
                                La DSW se integrará perfectamente al acondicionamiento de su cocina pero también a su sala comedor durante sus reuniones de familia.
                            </p>
                        </div>
                        <div className="item-card-area">
                            <ItemCount
                                counter={counter}
                                addProduct={addProduct}
                                removeProduct={removeProduct}
                                addCart={addCart}
                                stock={10}
                            />
                        </div>
                    </Col>
                    <Col className="item-specification">
                        <Table>
                            <tbody>
                                <tr>
                                    <td className="bold">Color</td>
                                    <td>Blanco / Negro</td>
                                </tr>
                                <tr>
                                    <td className="bold">Ancho</td>
                                    <td>46 cm</td>
                                </tr>
                                <tr>
                                    <td className="bold">Altura</td>
                                    <td>83,5 cm</td>
                                </tr>
                                <tr>
                                    <td className="bold">Profundidad</td>
                                    <td>40 cm</td>
                                </tr>
                                <tr>
                                    <td className="bold">Material</td>
                                    <td>Plástico y Madera de arce</td>
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
