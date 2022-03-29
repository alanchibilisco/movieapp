import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";
import CardFilm from "./CardFilm";
import InfiniteScroll from "react-infinite-scroll-component";
const ListFilms = ({ listStarW }) => {
  const [listFilms, setListFilms] = useState(listStarW);
  const [search, setSearch] = useState("");
  const [scroll, setScroll] = useState(listStarW);
  const [page, setPage] = useState(1);
  let id = 0;
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
        setScroll(resJson);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getFilms(search);
  };
  useEffect(() => {
    setListFilms((prevListFilms) => prevListFilms.concat(scroll));
  }, [page]);

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
                placeholder='Buscar "press enter to confirm"'
                className="text-white color-input w-100 rounded px-2 py-2"
                onChange={({ target }) => {
                  setSearch(target.value.trimStart());
                }}
              />
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
            <InfiniteScroll
              dataLength={listFilms.length}
              hasMore={true}
              next={() => {
                setPage((prevPage) => prevPage + 1);
              }}
              loader={<h3 className="text-white fw-bold">Loading...</h3>}
            >
              <Row>
                {listFilms.map((film) => (
                  <Col xs={6} sm={6} md={6} lg={4} key={id++}>
                    <CardFilm film={film} />
                  </Col>
                ))}
              </Row>
            </InfiniteScroll>
          </Container>
        </div>
      )}
    </div>
  );
};

export default ListFilms;
