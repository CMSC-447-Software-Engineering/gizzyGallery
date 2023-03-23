import * as React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './website.css';

export default function Home(){
    const navigate = useNavigate()
    //starts rotating the gear when you are hovering over it
    const hoveringOverGear = (e) => {
        e.target.className = "settingButton fa fa-gear fa-spin";
        e.target.style.backgroundColor = "#606060";
    }
    // stops gear from spinnin when you move cursor off of icon
    const stoppedHoveringOverGear = (e) => {
        e.target.className = "settingButton fa fa-gear";
        e.target.style.backgroundColor = "transparent";
    }
    // Switches gear icons color from white to blue
    const clickedSettings = (e) =>{
        var colorOfGear = e.target.style.color;
        if (colorOfGear === "rgb(255, 194, 14)"){
            e.target.style.color = "white";
        }else{
            e.target.style.color = "#FFC20E";
        }   
    }
    const goToLogin = () => {
        navigate('/');
    }
    
    return (
        <>
        <div className='navBar'>
            <h1 onClick={goToLogin} className="projectTitle">Portfolio Pal</h1>
            <button onClick={clickedSettings} onMouseOver={hoveringOverGear} onMouseOut={stoppedHoveringOverGear} className='settingButton fa fa-gear'></button>
        
        </div>
        
        </>
    )
}