
import { Link } from "react-router-dom";
import { logout } from "../../handlers/logoutHandler";
function UnAuthorised(props){

    return <div className="text-center bg-info text-white vh-100 d-flex align-items-center flex-column justify-content-center">
        <h2> OOPS! User of {props.userType} type doesn't have sufficient permissons to access this page  </h2>
        <p className="text-white" onClick={logout}> Login as another role  </p> 
    </div>

}


export default UnAuthorised;