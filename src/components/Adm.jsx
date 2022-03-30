import React, { useState } from "react";
import LogBar from "./LogBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { Container, Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
const Adm = ({ URLUsers }) => {
    const[users, setUsers]=useState([]);
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
            className="mx-2 text-white"
          />
        </Link>
      </div>
      <div className="container-fluid text-center">
        <h1 className="text-white">Administracion de Usuarios</h1>
        <hr className="text-white fw-bold" />
      </div>
        <Container>
            <Table bordered hover responsive className="text-white">
                <thead>
                        <tr className="">
                            <th>User Name</th>
                            <th>Password</th>
                            <th>Favorite Films</th>
                            <th>Delete</th>                            
                        </tr>
                </thead>
                <tbody>
                    {users.map((user)=>{
                        <tr>
                            <td>user.userName</td>
                            <td>user.password</td>
                            <td>user.favouriteFilms.length</td>
                            <td className="text-center"><Button className="btn-ligth">Delete</Button></td>
                        </tr>

                    })}
                </tbody>
            </Table>
        </Container>
    </div>
  );
};

export default Adm;
