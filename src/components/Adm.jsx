import React, { useEffect, useState } from "react";
import LogBar from "./LogBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { Container, Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
const Adm = ({ URLUsers, usersAPI, getAPIUS }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(usersAPI);    
  }, [usersAPI]);
  const handleDelete=async(id)=>{
    const result=window.confirm("¿Estas seguro de borrar el usuario?");  
      if (result) {
        try {
          const res=await fetch(`${URLUsers}/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },            
          });
            if(res.status===200){
              getAPIUS();
            }
        } catch (error) {
          console.log(error);
        }
      }    
  }
  return (
    <div className="text-white">
      <LogBar></LogBar>
      <div className="fs-3 text-end container-fluid mt-3 text-white">
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
        <Table bordered responsive className="text-white">
          <thead>
            <tr className="">
              <th>User Name</th>
              <th>Password</th>
              <th>Favorite Films</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr className="text-decoration-none" key={user._id}>
                <td>{user.userName}</td>
                <td>{user.password}</td>
                <td>{user.favoriteFilms.length}</td>
                <td className="text-center">
                  <Button className="btn-danger" onClick={()=>{handleDelete(user._id)}}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Adm;
