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
        <div className = "signup">
                <form onSubmit={handleSave}>
                    <label htmlFor="chk" aria-hidden="true">Sign up</label>
                    <input name="emailEntry" type="email" placeholder="Email"  ref={usernameRef} required=""></input>
					<input name="passwordEntry" type="password" placeholder="Password" ref={passwordRef} required=""></input>
					<input name="passwordEntry" type="password" placeholder="Confirm Password" ref={passwordConfirmRef} required=""></input>
                    <button>Sign Up</button>
                </form>
        </div>
        <div className="login">
            <form>
                <label htmlFor="chk" aria-hidden="true">Login</label>
                <input name="emailEntry" type="email" placeholder="Email"  ref={usernameRef} required=""></input>
				<input name="passwordEntry" type="password" placeholder="Password" ref={passwordRef} required=""></input>
				<button>Login</button>
            </form>
		</div>  
    </div>
    )
}
