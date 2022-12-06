import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import './home.css';

export default function Home(){
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [error, setError] = React.useState('')
    const navigate = useNavigate()


    const [signingUp, setSigningUp] = React.useState(true);
    const [signingIn, setSigningIn] = React.useState(false);

    const { createUser } = UserAuth();
    const { signIn } = UserAuth();

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
        setSigningUp(!signingUp);
        setSigningIn(!signingIn);
    }

    const handleClickSignIn = () => {
        setSigningIn(!signingIn);
        setSigningUp(!signingUp);
    }

    
    const handleSave = async(e) =>{
        e.preventDefault();
        setError('');
        if(confirmPassword === '' || password === '' || email === ''){
            alert("Please complete all parts of the form");
            return;
        }
        if(password !== confirmPassword){
            alert("Password did not match");
            return;
        }

        try{
            await createUser(email, password);
            navigate('/gizzyGal')
        }catch (e){
            setError(e.message);
        }
        if(error){
            alert(error);
        }
    }
    const handleLog = async(e) =>{ 
        e.preventDefault();
        setError('');
        try{
            await signIn(email, password);
            navigate('/gizzyGal')
        }catch (e){
            setError(e.message);
        }
        if(error){
            alert(error);
        }
    }
    return (
    
        <>
        
        <div className="container">
            <div className="signup">
                <form onSubmit={handleSave}>
                    <label onClick={handleClickSignUp} className='signupLabel' aria-hidden="true" style={signingUp ? upChecked : upNotChecked}>Sign Up</label>
                    <input onChange={(e) => setEmail(e.target.value)} name="emailEntry" type="email" placeholder="Email"></input>
                    <input onChange={(e) => setPassword(e.target.value)} name="passwordEntry" type="password" placeholder="Password"></input>
                    <input onChange={(e) => setConfirmPassword(e.target.value)} name="passwordEntry" type="password" placeholder="Confirm Password"></input>
                    <button>Sign Up</button>
                </form>
            </div>
            <div className="login" style={signingIn ? loginMain : signupMain}>
                <form onSubmit={handleLog}>
                    <label onClick={handleClickSignIn} className='loginLabel' aria-hidden="true" style={signingIn ? inChecked : inNotChecked}>Login</label>
                    <input onChange={(e) => setEmail(e.target.value)} name="emailEntry" type="email" placeholder="Email"></input>
                    <input onChange={(e) => setPassword(e.target.value)} name="passwordEntry" type="password" placeholder="Password"></input>
                    <button>Log In</button>
                    <p className = "forgotPass">
                        <Link to='/passwordRecovery'>Forgot Password? </Link>
                    </p>
                </form>
            </div>
        </div></>
    )
}
