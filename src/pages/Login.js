import { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Login(){

    const [showSignup, setShowSignUp] = useState(true);
    
    const [userId, setUserId]= useState("");
    const [password, setPassword]= useState("");
    const [userName, setUserName]= useState("");
    const [userEmail, setUserEmail]= useState("");
    const [userType, setUserType]= useState("CUSTOMER");


    const toggleSignup = ()=>{
        setShowSignUp(!showSignup);
    }
    

    return <div className="bg-info d-flex justify-content-center align-items-center vh-100" >

        <div style={{width:30 + "rem"}} className="card p-3 rounded-4 shadow-lg">

            <h4 className="text-info"> { showSignup ? "Sign Up" : "Log In" } </h4>

            <form>

                <div className="input-group">
                    <input className="form-control m-1" type="text" value={userId} placeholder="UserId" />
                </div>
                
                {

                    showSignup && 
                    
                    <>
                <div className="input-group">
                    <input className="form-control m-1" type="text" value={userName}  placeholder="Username" />
                </div>

                <div className="input-group">
                    <input className="form-control m-1"  value={userEmail} type="email" placeholder="Email" />
                </div>
                </>
            
            }


<div className="input-group">
              <input className="form-control m-1" value={password} type="password" placeholder="Password"/>
               </div>

              {
                showSignup && 
               <DropdownButton
                title={userType}
                id="userType"
                variant="light"
                align="end"
                >

                    <Dropdown.Item eventKey="CUSTOMER" > CUSTOMER </Dropdown.Item>
                    <Dropdown.Item eventKey="ENGINEER" > ENGINEER </Dropdown.Item>

                </DropdownButton>

              }
                
                <div className="input-group">
                    <input className="btn btn-info form-control text-white m-1 cursor-pointer" type="submit" 
                    value= {showSignup ? "Sign Up" : "Log In" } />
                </div>


                <div className="text-info m-1" onClick={toggleSignup} >
                    {
                        showSignup ? "Already have an account ? LogIn"
                        : "Don't have an account ? Sign Up"
                    }
                </div>

                
            </form>
        </div>

    </div>

}

export default Login;