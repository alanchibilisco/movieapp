import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "./img/popcorn.png";
const Film = () => {
  return (
    <div>
      <div className="fs-3 text-end container-fluid mt-3">
        <Link to="/ListFilms">
          <FontAwesomeIcon icon={faArrowLeft} className="mx-2 text-white" />
        </Link>
      </div>
    <div className="container-fluid">
        <img src={logo} alt="logo" width="100%" className="border border-2 border-white" />
        <h3 className="text-white text-center fw-bold my-3">Titulo</h3>
        <div className="text-start">
        <h6 className="text-white">Lenguaje: prueba</h6>
        <h6 className="text-white">Genero: prueba</h6>
        <h6 className="text-white">Fecha de estreno: prueba</h6>
        </div>
        <h3 className="text-white text-center fw-bold my-3">Sinopsis</h3>
        <p className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis laborum eligendi quia totam deleniti explicabo inventore omnis dignissimos sed illo in corrupti, minus vitae hic et veritatis vel incidunt? Non accusamus, iusto odit adipisci sequi repudiandae alias assumenda obcaecati amet ut ducimus est, sint ullam maiores voluptatum neque aperiam ipsum?</p>
    </div>

    </div>
  );
};

export default Film;
