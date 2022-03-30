import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import imageNotFound from "./img/image-not-found.png";
const CardFilm = ({ film }) => {  
  return (
    <div className="my-2">      
      {film.show.image === undefined && film.show.image === null ? (
        <div>
          <h1 className="text-white">aqui esta el error</h1>
        </div>
      ) : (
        <div>
          <Link to={`/Film/${film.show.id}`} className="text-decoration-none">
            {film.show.image.original === null ? (
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
                  src={film.show.image.original}
                  alt="image"
                  className="img-card"
                />
              </div>
            )}

            <h6 className="text-white text-end my-2 fw-bold">
              {film.show.name}
            </h6>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CardFilm;
