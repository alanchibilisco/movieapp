import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import imageNotFound from "./img/image-not-found.png";
const CardFilm = ({ film }) => {  
  return (
    <div className="my-2">      
        <Link to={`/Film/${film.show.id}`} className="text-decoration-none">
          <img src={film.show.image.original} alt="image" className="img-card" />
          <h6 className="text-white text-end my-2 fw-bold">{film.show.name}</h6>
        </Link>     
    </div>
  );
};

export default CardFilm;
