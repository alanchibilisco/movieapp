import React, { useEffect, useLayoutEffect, useState } from "react";
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
  const [listFilms, setListFilms] = useState([]);
  const [search, setSearch] = useState("");
  console.log(listFilms);
  useEffect(() => {
    setListFilms(listStarW);
  }, [listStarW]);  
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
  useEffect(()=>{
    getFilms(search);
  }, [search])

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
          <form className="text-white">
            <input
              type="text"
              placeholder="Buscar"
              className="text-white rounded color-input w-100 px-2 py-2"
              onChange={({ target }) => {
                setSearch(target.value.trimStart());
              }}
            />
          </form>
        </div>
      </div>
      <div className="text-center text-white container my-3">
        <h2 className="fw-bold">Películas</h2>
        <hr />
      </div>
       <div>
        {listFilms.length > 0 ? (
          <Container>
            <Row>
              {listFilms.map((film) => (
                <Col xs={6} sm={6} md={6} lg={4} key={film.show.id}>
                  <CardFilm film={film} />
                </Col>
              ))}
            </Row>
          </Container>
        ) : (
          <div>
            <h2 className="text-white text-center">
              No se encontraron peliculas
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListFilms;
