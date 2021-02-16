import React, {useState} from 'react';
//bootstrap
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const FormCart = ({ submitOrder }) => {

    const [name, setName] = useState("");
    const [tel, setTel] = useState("");
    const [email, setEmail] = useState("");

    const [validated, setValidated] = useState(false);

     //funcion para validar datos
     const handleSubmit = (event) =>{
        const form = event.currentTarget;
        if(form.checkValidity() === false){
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        submitOrder();
    }
    
    const disabled =! (
        name.length &&
        tel.length &&
        email.length
    )

    return (
        <div>
            <div className="my-5">
                <h3 className="cart-title text-uppercase">Datos de compra</h3>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <FormGroup>
                        <FormControl onChange={event => setName(event.target.value)} required type="text" placeholder="Tu nombre" name="name" value={name} className="cart-input"></FormControl>
                        <FormControl.Feedback type="invalid">Falta tu nombre</FormControl.Feedback>
                    </FormGroup>
                    <FormGroup>
                        <FormControl onChange={event => setTel(event.target.value)} required type="tel" placeholder="Telefono" name="tel" value={tel} className="cart-input"></FormControl>
                        <FormControl.Feedback type="invalid">Falta tu telefono</FormControl.Feedback>
                    </FormGroup>
                    <FormGroup>
                        <FormControl onChange={event => setEmail(event.target.value)} required type="email" placeholder="Tu email" name="email" value={email} className="cart-input"></FormControl>
                        <FormControl.Feedback type="invalid">Falta tu email</FormControl.Feedback>
                    </FormGroup>
                    <Button className="text-uppercase noShadow bttn-checkout" type="submit" disabled={disabled}>Pagar</Button>
                </Form>
            </div>
        </div>
    )
}

export default FormCart;
