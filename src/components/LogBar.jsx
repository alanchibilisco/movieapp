import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faRightFromBracket,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";

const LogBar = () => {
  return (
    <div className="container-fluid text-end fs-3">
      <Link to="/Login" className="text-decoration-none text-white">
        <FontAwesomeIcon icon={faRightToBracket} />
      </Link>
      <div className="text-end text-white">
          <FontAwesomeIcon icon={faRightFromBracket} className='mx-2'/>
          <FontAwesomeIcon icon={faUserCheck} className='mx-2'/>
      </div>
    </div>
  );
};

export default LogBar;
