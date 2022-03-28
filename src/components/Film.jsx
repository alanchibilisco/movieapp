import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import logo from "./img/popcorn.png";
const Film = () => {
  const [filmS, setFilmS] = useState({});
  console.log(filmS);
  console.log(filmS.image === undefined);
  const { id } = useParams();
  useEffect(async () => {
    try {
      const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const resJson = await res.json();
      setFilmS(resJson);
      console.log(resJson);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div>
      <div className="fs-3 text-end container-fluid mt-3">
        <Link to="/ListFilms">
          <FontAwesomeIcon icon={faArrowLeft} className="mx-2 text-white" />
        </Link>
      </div>
      {filmS.image === undefined ? (
        <div className="text.white">
          <h1>Aqui esta el error</h1>
        </div>
      ) : (
        <div className="text-white">
          <h1>Aqui no esta el error</h1>

          <div className="container-fluid">
            <div className="text-center">
              <img
                src={filmS.image.original}
                alt="logo"                
                className="img-film"
              />
            </div>

            <h3 className="text-white text-center fw-bold my-3">
              {filmS.name}
            </h3>
            <div className="text-start">
              <h6 className="text-white"><b>Lenguaje:</b> {filmS.language}</h6>
              <h6 className="text-white"><b>Genero:</b> {filmS.genres.join(", ")}</h6>
              <h6 className="text-white">
                <b>Fecha de estreno:</b> {filmS.premiered}
              </h6>
            </div>
            <h3 className="text-white text-center fw-bold my-3">Sinopsis</h3>
            <div className="text-white">
              <p>
                {filmS.summary}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Film;
