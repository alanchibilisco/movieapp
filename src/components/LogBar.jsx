import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faRightFromBracket,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Nav } from "react-bootstrap";

const LogBar = () => {
  const navigate=useNavigate();
  let session=JSON.parse(sessionStorage.getItem("stateSession"))||false;
  let userSession=JSON.parse(sessionStorage.getItem("userSession"))||"";  
  const handleClose=()=>{
    if(session){
      session=false;
      sessionStorage.setItem("stateSession", JSON.stringify(session));
      sessionStorage.setItem("userSession", JSON.stringify(""));
      sessionStorage.setItem("userOBJ", JSON.stringify(""));
      navigate("/");
    }
  }
  return (
    <div className="container-fluid text-end text-decoration-none text-white fs-3">
      {session ?
      <div className="d-flex justify-content-end">      
      {userSession === "superUser" ?
        <>
        <Nav.Link className="text-decoration-none text-white" onClick={handleClose}><FontAwesomeIcon icon={faRightFromBracket} className='mx-2'/></Nav.Link>     
      <Link to="/Adm" className="text-decorartion-none text-white nav-link"><FontAwesomeIcon icon={faUserCheck} className='mx-2'/></Link>
      <Nav.Link className="text-decorartion-none text-white"><p>{userSession}</p></Nav.Link>
        </>
    :
    <>
       <Nav.Link className="text-decoration-none text-white" onClick={handleClose}><FontAwesomeIcon icon={faRightFromBracket} className='mx-2'/></Nav.Link>     
      <Link to="/" className="text-decorartion-none text-white nav-link"><FontAwesomeIcon icon={faUserCheck} className='mx-2'/></Link>
      <Nav.Link className="text-decorartion-none text-white"><p>{userSession}</p></Nav.Link>
    </>
    }
      
        {/* <Nav.Link className="text-decoration-none text-white" onClick={handleClose}><FontAwesomeIcon icon={faRightFromBracket} className='mx-2'/></Nav.Link>     
      <Nav.Link className="text-decorartion-none text-white"><FontAwesomeIcon icon={faUserCheck} className='mx-2'/></Nav.Link>
      <Nav.Link className="text-decorartion-none text-white"><p>{userSession}</p></Nav.Link> */}
      </div>  
    :
    <>
     <Link to="/Login" className="text-decoration-none text-white">
        <FontAwesomeIcon icon={faRightToBracket} />
      </Link>     
    </>
    }      
    </div>
  );
};

export default LogBar;
