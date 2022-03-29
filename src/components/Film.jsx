import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
const Film = () => {
  const [filmS, setFilmS] = useState({});
  const { id } = useParams();
  useEffect(async () => {
    try {
      const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const resJson = await res.json();
      setFilmS(resJson);
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
        <div className="text-white fw-bold text-center">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="text-white my-5">
          <div className="container-fluid">
            <div className="text-center">
              <img src={filmS.image.original} alt="logo" className="img-film" />
            </div>

            <h3 className="text-white text-center fw-bold my-3">
              {filmS.name}
            </h3>
            <div className="text-start">
              <h6 className="text-white">
                <b>Lenguaje:</b> {filmS.language}
              </h6>
              <h6 className="text-white">
                <b>Genero:</b> {filmS.genres.join(", ")}
              </h6>
              <h6 className="text-white">
                <b>Fecha de estreno:</b> {filmS.premiered}
              </h6>
            </div>
            <h3 className="text-white text-center fw-bold my-3">Sinopsis</h3>
            <div
              className="text-white"
              dangerouslySetInnerHTML={{ __html: filmS.summary }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Film;
