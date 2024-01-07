import React from "react";
import { Link } from "react-router-dom";
function UnAuthenticated(){
    return <div className="text-center bg-info text-white vh-100 d-flex align-items-center flex-column justify-content-center">
        <h2> You need to be logged in to access this page </h2>
        <Link className="text-white" to="/"> Move to Login Page  </Link>
    </div>

}


export default UnAuthenticated;