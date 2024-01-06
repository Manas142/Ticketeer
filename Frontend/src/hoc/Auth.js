import UnAuthenticated from "../components/UnAuthenticated/UnAuthenticated";
import UnAuthorised from "../components/UnAuthorised/UnAuthorised";
import constants from "../utils/constants";
import { useLocation } from "react-router-dom";


function Auth(props){

    const location = useLocation();
    const userType = localStorage.getItem("userType");

    if(!userType){
        return <UnAuthenticated/>
    }



    const page=location.pathname.split('/')[1];


    var requiredUserType=null;

    if(page==="admin"){
        requiredUserType=constants.userTypes.admin
    }else if(page==="customer"){
        requiredUserType=constants.userTypes.customer
    }
    else if(page==="engineer"){
        requiredUserType=constants.userTypes.engineer
    }


    if(userType!==requiredUserType){
        return <UnAuthorised userType={userType} />
    }

    return <div>
        {props.children}
    </div>

}


export default Auth;