import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import LogBar from "./LogBar";
const CreateAcc = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("desde submit");
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
