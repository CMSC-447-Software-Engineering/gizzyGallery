import * as React from 'react';
import './website.css';

export default function (){

 
    return (
        <div className="container">
            <form>
                <label className='signupLabel' aria-hidden="true" >Sign Up</label>
                <input name="emailEntry" type="email" placeholder="Email"></input>
                <input name="passwordEntry" type="password" placeholder="Password"></input>
                <input name="passwordEntry" type="password" placeholder="Confirm Password"></input>
                <button>Sign Up</button>
            </form>
            
        </div>
    )
}