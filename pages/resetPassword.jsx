import React, { useRef } from "react";
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function ResetPassword(){
    const usernameRef = useRef();
    const { forgotPassword } = UserAuth();
    const navigate = useNavigate()

    const forgotPasswordHandler = async(e) =>{ 
        e.preventDefault();
        const email = usernameRef.current.value;
        if (email)
          forgotPassword(email).then(() => {
            usernameRef.current.value = "";
            navigate('/')
          });
      };
      const backToHome= () => {
        navigate('/')
      }
  return (
    
    
    <div className = "resetContainer" >
        <div className="resetPassword">
            <label className="resetLabel">Reset Password</label>
        </div>
        <form onSubmit={forgotPasswordHandler}>
            <input className = "resetEmail" name="emailEntry" type="email" placeholder="Enter Email"  ref={usernameRef}></input>
            <button className="resetButton">Send reset link</button>
            <button onClick={backToHome} className="resetButton" ><span>&#171;</span> Go Back To Login</button>
        </form>
        
    </div>
  )
}