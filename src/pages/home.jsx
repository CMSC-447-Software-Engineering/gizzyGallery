import React, { useRef } from 'react';
import {firestore} from "../firebase"
import {addDoc, collection} from "firebase/firestore"
import './home.css';

export default function Home(){
    const usernameRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const ref = collection(firestore, "messages");


    const handleSave = async(e) =>{
        e.preventDefault();
        console.log(usernameRef.current.value);
        console.log(passwordRef.current.value);

        if (passwordRef.current.value === '' || usernameRef.current.value === '' || passwordConfirmRef.current.value === ''){
            alert("Please complete all parts of the form");
            return;
        }
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            alert("Password did not match");
            return;
          }

        let user = {
            password: passwordRef.current.value,
            username:usernameRef.current.value, 
        }
        

        try{
            addDoc(ref, user);
        }catch (e){
            console.log(e);
        }


    }
    return (
        
    <div className = "container" >
        <div class = "signUp">
                <h1>Sign Up Today</h1>
                <form onSubmit={handleSave}>
                <div class = "usernameContainer">
                    <input name="emailEntry" type="email" placeholder="Email"  ref={usernameRef} />
                </div>
                <div class = "passwordContainer">
                    <input name="passwordEntry" type="password" placeholder="Password" ref={passwordRef} />
                </div>
                <div class = "passwordConfirmContainer">
                    <input name="passwordEntry" type="password" placeholder="Confirm Password" ref={passwordConfirmRef} />
                </div>
                <div class = "sign">
                    <button class = "signUpButton" >Sign Up</button>
                </div>
            </form>
        </div>
        <div class="login">
            <button class = "loginButton">Already Have An Account?</button>
        </div>    
    </div>
    )
}
