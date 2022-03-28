import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";
import CardFilm from "./CardFilm";
const ListFilms = ({ listStarW }) => {
  console.log(listStarW);
  const [listFilms, setListFilms] = useState(listStarW);
  const [search, setSearch] = useState("");
  console.log(listFilms); 
  const getFilms = async (value) => {
    if (value === "") {
      setListFilms(listStarW);
    } else {
      try {
        const res = await fetch(
          `http://api.tvmaze.com/search/shows?q=${value}.`
        );
        const resJson = await res.json();
        setListFilms(resJson);
      } catch (error) {
        console.log(error);
      }
    }
  }; 
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('desde submit');
    console.log(search);
    getFilms(search);
  }

  return (
    <div className="">
      <div className="fs-3 text-end container-fluid mt-3">
        <Link to="/">
          <FontAwesomeIcon icon={faHouseChimney} className="mx-2 text-white" />
        </Link>
        <Link to="/ListFilms">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="mx-2 text-warning"
          />
        </Link>
      </div>
      <div className="container my-3">
        <div className="container">
          <form className="text-white" onSubmit={handleSubmit}>
            <div className="d-flex justify-content-center">
            <input
              type="text submit"
              placeholder="Buscar"
              className="text-white color-input w-100 rounded px-2 py-2"
              onChange={({ target }) => {
                setSearch(target.value.trimStart());
              }} />            
            </div>
          </form>
        </div>
      </div>
      <div className="text-center text-white container my-3">
        <h2 className="fw-bold">Películas</h2>
        <hr />
      </div>
      {listFilms[0].show === undefined ? (
        <div className="text.white">
          <h1 className="text-white">Aqui esta el error</h1>
          <div>
            <h2 className="text-white text-center">
              No se encontraron peliculas
            </h2>
          </div>
        </div>
      ) : (
        <div>
          <Container>
            <Row>
              {listFilms.map((film) => (
                <Col xs={6} sm={6} md={6} lg={4} key={film.show.id}>
                  <CardFilm film={film} />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
};

export default ListFilms;
