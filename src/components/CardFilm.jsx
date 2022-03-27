import React from "react";
import { Link } from "react-router-dom";
import logo from "./img/popcorn.png";

const CardFilm = () => {
  return (
    <div className="border border-2 border-white my-2">
      <Link to="/Film" className="text-decoration-none">
        <img src={logo} alt="" width="100%" />
        <h6 className="text-white text-end">
          The Lord Of Rings the two towers
        </h6>
      </Link>
    </div>
  );
};

export default CardFilm;
