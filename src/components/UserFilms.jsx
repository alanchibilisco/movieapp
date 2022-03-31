import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogBar from "./LogBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";
import CardFilmsUser from "./CardFilmsUser";

const UserFilms = ({ URLUsers }) => {
  const userOBJ = JSON.parse(sessionStorage.getItem("userOBJ")) || "";
  const [listFilms, setListFilms] = useState([]);
  useEffect(async () => {
    try {
      const res = await fetch(`${URLUsers}/${userOBJ}`);
      const resJson = await res.json();
      setListFilms(resJson.favoriteFilms);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div>
      <LogBar></LogBar>
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
      <div className="text-center text-white container my-3">
        <h2 className="fw-bold">Películas Favoritas</h2>
        <hr />
      </div>
      {listFilms.length === 0 ? (
        <div className="text.white">
          <div>
            <h2 className="text-white text-center">
              No posees peliculas agregadas a favoritos
            </h2>
          </div>
        </div>
      ) : (
        <div>
          <Container>
            <Row>
              {listFilms.map((film) => (
                <Col xs={6} sm={6} md={6} lg={4} key={film.id}>                  
                  <CardFilmsUser film={film}></CardFilmsUser>                  
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
};

export default UserFilms;
