import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import logo from "./img/popcorn.png";
import { Link } from "react-router-dom";
import LogBar from "./LogBar";
const Index = () => {
  return (
    
    <div className="text-white">
      <LogBar></LogBar>
      <div className="fs-3 text-end container-fluid mt-3">
        <Link to="/" className="text-decoration-none text-warning">
          <FontAwesomeIcon
            icon={faHouseChimney}
            className="mx-2 text-warning"
          />
        </Link>
        <Link to="/ListFilms" className="text-decoration-none text-white">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="mx-2 text-white"
          />
        </Link>
        {/* <LogBar></LogBar> */}
      </div>
      <div className="text-center">
        <img src={logo} alt="logo pop corn" className="logo-app" />
      </div>
      <div className="text-center text-warning">
        <h1 className="fw-bold text-white">MoviePop!</h1>
      </div>
    </div>
  );
};

export default Index;
