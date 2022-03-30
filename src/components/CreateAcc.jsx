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
const CreateAcc = ({URLUsers}) => {
  const navigate=useNavigate();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [inputUser, setInputUser] = useState("");
  const [inputPass, setInputPass] = useState("");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setInputUser(document.getElementById("inputUser"));
    setInputPass(document.getElementById("inputPass"));    
    getAPIUS();    
  }, []);
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
 const create=async(newUser)=>{
   try {
     const res=await fetch(URLUsers, {
       method: "POST",
       headers: {
         "Content-Type": "application/json"
       },
       body: JSON.stringify(newUser)
     })
   } catch (error) {
     console.log(error);
   }
 }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("desde submit");
        if(gralTest()){
          const newUser={
            userName: user,
            password: pass,
            favouriteFilms: []
          };
          create(newUser);
          navigate("/Login");
          alert("USUARIO CREADO");
        }else{
          alert("DEBE COMPLETAR TODOS LOS CAMPOS");
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
            <Form onSubmit={handleSubmit}>
              <Form.Group className="my-3">
                <Form.Label htmlFor="inputUser">
                  Ingrese su email
                </Form.Label>
                <Form.Control
                  placeholder="example@example.com"
                  type="email"
                  required
                  id="inputUser"
                  onChange={({target})=>{
                    setUser(target.value.trimStart());
                    testUser();
                  }}
                ></Form.Control>
              </Form.Group>
              <Form.Group className="my-3">
                <Form.Label htmlFor="inputPass">
                  Ingrese su contraseña (min 8, max 16 caracteres.,  al menos 1 mayuscula, sin signos)
                </Form.Label>
                <Form.Control
                  placeholder="Password"
                  type="password"
                  required
                  minLength={8}
                  maxLength={16}
                  id="inputPass"
                  onChange={({target})=>{
                    setPass(target.value.trimStart());
                    testPassw();
                  }}
                ></Form.Control>
              </Form.Group>
              <div className="text-end">
                <button className="btn btn-warning">Registrarse</button>
              </div>
            </Form>
          </Col>
          <Col xs={12} md={2} lg={4}></Col>
        </Row>
      </Container>
      <div className="text-center">
        <Link
          to="/Login"
          className="text-decoration-none text-white fw-bold fs-5"
        >
          ¡LogIn!
        </Link>
      </div>
    </div>
  );
};

export default CreateAcc;
