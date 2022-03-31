import React from 'react';
import { Link } from 'react-router-dom';
import imageNotFound from "./img/image-not-found.png";
const CardFilmsUser = ({film}) => {
    return (
        <div className='my-2'>            
            {film.image === undefined && film.image === null ? (
        <div>
          <h1 className="text-white">aqui esta el error</h1>
        </div>
      ) : (
        <div>
          <Link to={`/FilmUser/${film.id}`} className="text-decoration-none">
            {film.image.original === null ? (
              <div>
                <img
                  src={imageNotFound}
                  alt="imageNotFound"
                  className="img-card"
                />
              </div>
            ) : (
              <div>
                <img
                  src={film.image.original}
                  alt="image"
                  className="img-card"
                />
              </div>
            )}

            <h6 className="text-white text-end my-2 fw-bold">
              {film.name}
            </h6>
          </Link>
        </div>
      )}
        </div>
    );
};

export default CardFilmsUser;