import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogBar from "./LogBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";
import CardFilm from "./CardFilm";
import CardFilmsUser from "./CardFilmsUser";

const UserFilms = ({listStarW, URLUsers}) => {
    const userOBJ=JSON.parse(sessionStorage.getItem("userOBJ"))||"";
    const[listFilms, setListFilms]=useState([]);
    useEffect(async()=>{
        // setListFilms(listStarW);        
        try {
          const res=await fetch(`${URLUsers}/${userOBJ}`);
          console.log(res);
          const resJson=await res.json();
          console.log(resJson); 
          setListFilms(resJson.favoriteFilms);         
        } catch (error) {
          console.log(error);
        }
        
    },[]);
    console.log(listFilms);
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
                    {/* <CardFilm film={film} />                    */}
                    <CardFilmsUser film={film}></CardFilmsUser>
                    {/* <h2 className="text-white">{film.name}</h2> */}
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
