import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {

    return (
        
        <div className='container text-white my-5'>
            <div className='text-center'>
            <h1>Ups!, Sitio en construccion.</h1>
            </div>
            <div className='text-center'>
                <Link to="/" className='text-decoration-none text-white fw-bold fs-5'>Regresa al inicio</Link>
            </div>
        </div>
    );
};

export default Error404;