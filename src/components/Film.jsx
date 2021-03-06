import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate, useParams } from "react-router-dom";
import LogBar from "./LogBar";
const Film = ({ URLUsers }) => {
  const session = JSON.parse(sessionStorage.getItem("stateSession")) || false;
  const userSession = JSON.parse(sessionStorage.getItem("userSession")) || "";
  const userOBJ = JSON.parse(sessionStorage.getItem("userOBJ"));
  const [filmS, setFilmS] = useState({});
  const [user, setUser] = useState({});
  const { id } = useParams();
  const navigate=useNavigate();
  useEffect(async () => {
    try {
      const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const user = await fetch(`${URLUsers}/${userOBJ}`);
      const userJson = await user.json();
      const resJson = await res.json();
      setFilmS(resJson);
      setUser(userJson);
    } catch (error) {
      console.log(error);
    }
  }, []);
  const update = async () => {
    try {
      const res = await fetch(`${URLUsers}/${userOBJ}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
    } catch (error) {
      console.log(error);
    }
  };
  const exist=(element)=>element.id===filmS.id;
  
  const handleAdd = (e) => {
    e.preventDefault();
    if (user.favoriteFilms.some(exist)) {
      alert("La pelicula ya existe en sus favoritos");
      return;
    } else {
      const result = window.confirm(
        "¿Estas seguro de agregarla a tus favoritos?"
      );
      if (result) {
        user.favoriteFilms.push(filmS);
        update();
        alert('La pelicula fue agregada a sus favoritos');
        navigate("/UserFilms");
      }
    }
  };
  return (
    <div>
      <LogBar></LogBar>
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
          {session && userSession !== "superUser" ? (
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
              <div className="text-center">
                <button className="btn btn-success" onClick={handleAdd}>
                  Add to favorite
                </button>
              </div>
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
          ) : (
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
          )}
        </div>
      )}
    </div>
  );
};

export default Film;
