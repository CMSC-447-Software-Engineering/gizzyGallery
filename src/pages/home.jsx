import * as React from 'react';
import {firestore} from "../firebase"
import {addDoc, collection} from "firebase/firestore"
import './home.css';

export default function Home(){
    const usernameRef = React.useRef();
    const passwordRef = React.useRef();
    const passwordConfirmRef = React.useRef();
    const ref = collection(firestore, "messages");
    const [signingUp, setSigningUp] = React.useState(true);
    const [signingIn, setSigningIn] = React.useState(false);

    const upChecked = {
        transform: 'scale(1)'
    }
    const upNotChecked = {
        transform: 'scale(.6)'
    }
    const inChecked = {
        transform: 'scale(1)'
    }
    const inNotChecked = {
        transform: 'scale(.6)'
    }
    const loginMain = {
        transform: 'translateY(-500px)',
        transition: '.8s ease-in-out'
        
    }
    const signupMain = {
        transform: 'translateY(-180px)',
        transition: '.8s ease-in-out'
    }

    const handleClickSignUp = () => {
        console.log("clicked sign up", !signingUp);
        setSigningUp(!signingUp);
        setSigningIn(!signingIn);
    }

    const handleClickSignIn = () => {
        console.log("clicked sign in ", !signingIn);
        setSigningIn(!signingIn);
        setSigningUp(!signingUp);
    }

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
    
        <>
        
        <div className="container">
            <div className="signup">
                <form onSubmit={handleSave}>
                    <label onClick={handleClickSignUp} className='signupLabel' aria-hidden="true" style={signingUp ? upChecked : upNotChecked}>Sign Up</label>
                    <input name="emailEntry" type="email" placeholder="Email" ref={usernameRef}></input>
                    <input name="passwordEntry" type="password" placeholder="Password" ref={passwordRef}></input>
                    <input name="passwordEntry" type="password" placeholder="Confirm Password" ref={passwordConfirmRef}></input>
                    <button>Sign Up</button>
                </form>
            </div>
            <div className="login" style={signingIn ? loginMain : signupMain}>
                <form>
                    <label onClick={handleClickSignIn} className='loginLabel' aria-hidden="true" style={signingIn ? inChecked : inNotChecked}>Login</label>
                    <input name="emailEntry" type="email" placeholder="Email"></input>
                    <input name="passwordEntry" type="password" placeholder="Password"></input>
                    <button>Log In</button>
                </form>
            </div>
        </div></>
    )
}
