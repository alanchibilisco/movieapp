import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { testPass, testEmail } from "./Helpers";
import LogBar from "./LogBar";
const Login = ({ URLSuperUser, URLUsers }) => {
  const navigate=useNavigate();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [inputUser, setInputUser] = useState("");
  const [inputPass, setInputPass] = useState("");
  const [superUser, setSuperUser] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setInputUser(document.getElementById("inputUser"));
    setInputPass(document.getElementById("inputPass"));
    getAPISU();
    getAPIUS();
  }, []);
  const getAPISU = async () => {
    try {
      const res = await fetch(URLSuperUser);
      const resJson = await res.json();
      setSuperUser(resJson);
    } catch (error) {
      console.log(error);
    }
  };
  const getAPIUS = async () => {
    try {
      const res = await fetch(URLUsers);
      const resJson = await res.json();
      setUsers(resJson);
    } catch (error) {
      console.log(error);
    }
  };
   const testUser = () => {
    if (testEmail(user)&&user!=="") {
      inputUser.className = "form-control is-valid";
      return true;
    } else {
      inputUser.className = "form-control is-invalid";
      return false;
    }
  };
  const testPassw = () => {
    if (testPass(pass)&&pass!=="") {
      inputPass.className = "form-control is-valid";
      return true;
    } else {
      inputPass.className = "form-control is-invalid";
      return false;
    }
  };
  const gralTest = () => {
    if (testUser() && testPassw()) {
      return true;
    } else {
      return false;
    }
  };

  let session = false;
  const findUser = () => {
    const newUser = users.find((userS) => {
      return userS.userName === user;
    });
    if (newUser !== undefined) {
      return newUser;
    } else {
      return "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (gralTest()) {
      if (user === superUser[0].userName && pass === superUser[0].password) {
        session = true;
        const user = "superUser";
        sessionStorage.setItem("stateSession", JSON.stringify(session));
        sessionStorage.setItem("userSession", JSON.stringify(user));
        navigate("/");
        return alert("BIENVENIDO ADMINISTRADOR");       
      } else if (user === findUser().userName && pass === findUser().password) {
        session = true;
        const user = findUser().userName;
        const userOBJ=findUser();
        sessionStorage.setItem("stateSession", JSON.stringify(session));
        sessionStorage.setItem("userSession", JSON.stringify(user));
        sessionStorage.setItem("userOBJ", JSON.stringify(userOBJ._id));
        navigate("/");
        return alert(`Bienvenido usuario: ${findUser().userName}`);        
      } else {
        return alert("USUARIO O CONTRASEÑA INCORRECTO");
      }
    } else {
      return alert("DEBE COMPLETAR TODOS LOS CAMPOS");
    }
  };  
  return (
    <div className="text-white">
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
      <Container>
        <Row>
          <Col xs={12} md={2} lg={4}></Col>
          <Col xs={12} md={8} lg={4} className="my-5">
            <Form onSubmit={handleSubmit} noValidate>
              <Form.Group className="my-3">
                <Form.Label htmlFor="inputUser">Ingrese su email</Form.Label>
                <Form.Control
                  placeholder="example@example.com"
                  type="email"
                  required
                  id="inputUser"
                  onChange={({ target }) => {
                    setUser(target.value.trimStart());
                    testUser();
                  }}
                ></Form.Control>
              </Form.Group>
              <Form.Group className="my-3">
                <Form.Label htmlFor="inputPass">
                  Ingrese su contraseña
                </Form.Label>
                <Form.Control
                  placeholder="Password"
                  type="password"
                  required
                  minLength={8}
                  maxLength={16}
                  id="inputPass"
                  onChange={({ target }) => {
                    setPass(target.value.trimStart());
                    testPassw();
                  }}
                ></Form.Control>
              </Form.Group>
              <div className="text-end">
                <button className="btn btn-warning">Ingresar</button>
              </div>
            </Form>
          </Col>
          <Col xs={12} md={2} lg={4}></Col>
        </Row>
      </Container>
      <div className="text-center">
        <Link
          to="/CreateAccount"
          className="text-decoration-none text-white fw-bold fs-5"
        >
          ¡Registrarse!
        </Link>
      </div>
    </div>
  );
};

export default Login;
