import React from 'react';
import logo from "./img/popcorn.png";

const CardFilm = () => {
    return (
        <div className='container border border-2 border-white my-2'>
            <img src={logo} alt="" width='100%' />
            <h6 className='text-white text-end'>Titulo</h6>
        </div>
    );
};

export default CardFilm;