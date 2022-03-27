import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import logo from "./img/popcorn.png";
const Index = () => {
  return (
    <div>
      <div className="fs-3 text-end container-fluid">
        <FontAwesomeIcon icon={faHouseChimney} className='mx-2 text-warning' />
        <FontAwesomeIcon icon={faMagnifyingGlass} className='mx-2 text-white'/>
      </div>
      <div className="text-center">
        <img src={logo} alt="logo pop corn" className="logo-app"/>        
      </div>
      <div className="text-center text-warning">
        <h1>MoviePop!</h1>
      </div>
      </div>  

  );
};

export default Index;
