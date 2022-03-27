import React from "react";
import { Link } from "react-router-dom";
import imageNotFound from "./img/image-not-found.png";
const CardFilm = ({ film }) => {
  return (
    <div className="my-2">
      {film.show.image.original !== null ? (
        <Link to="/Film" className="text-decoration-none">
          <img src={film.show.image.original} alt="image" width="100%" />
          <h6 className="text-white text-end my-2 fw-bold">{film.show.name}</h6>
        </Link>
      ) : (
        <Link to="/Film" className="text-decoration-none">
        <img src={imageNotFound} alt="imagen no encontrada" />
        <h6 className="text-white text-end my-2 fw-bold">{film.show.name}</h6>
        </Link>
      )}
    </div>
  );
};

export default CardFilm;
