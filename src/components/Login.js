import React from 'react';
//bootstrap, style
import Form from 'react-bootstrap/Form';
import FormControl  from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import '../styles/login.css';

const Login = () => {
    return (
        <Form className="login-container">
            <FormControl type="email" placeholder="email" className="login-input"></FormControl>
            <FormControl type="password" placeholder="contraseña" className="login-input"></FormControl>
            <Button className="login-bttn text-uppercase noShadow">Login</Button>
        </Form>
    )
}

export default Login;
