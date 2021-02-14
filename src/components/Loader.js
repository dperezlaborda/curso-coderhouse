import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import '../styles/loader.css';

const Loader = () => {
    return (
        <div className="spinner-container">
            <Spinner animation="border" role="status" variant="secondary"/>
        </div>
    )
}

export default Loader;
