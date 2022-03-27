import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Form, Row } from "react-bootstrap";
import CardFilm from "./CardFilm";
const ListFilms = () => {
    
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
              <input type="text" placeholder="Buscar" className="text-white rounded color-input w-100 px-2 py-2" />
          </form>
          </div>
      </div>
      <div className="text-center text-white container my-3">
          <h2 className="fw-bold">Películas</h2>
          <hr />
      </div>
      <div>          
          <Container>
              <Row>
                  <Col  xs={6} sm={6} md={6} lg={4}><CardFilm/></Col>
                  <Col  xs={6} sm={6} md={6} lg={4}><CardFilm/></Col>
                  <Col  xs={6} sm={6} md={6} lg={4}><CardFilm/></Col>
                  <Col  xs={6} sm={6} md={6} lg={4}><CardFilm/></Col>                  
              </Row>
          </Container>
      </div>
    </div>
  );
};

export default ListFilms;
