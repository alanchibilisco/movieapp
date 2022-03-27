import React from "react";
import { Link } from "react-router-dom";
const CardFilm = ({film}) => {  
  return (
    <div className="my-2">
      <Link to="/Film" className="text-decoration-none">
        <img src={film.show.image.medium} alt="image" width="100%" />
        <h6 className="text-white text-end my-2 fw-bold">
          {film.show.name}
        </h6>
      </Link>
    </div>
  );
};

export default CardFilm;
