import React from 'react'
import { useNavigate } from 'react-router-dom';
import './gizzyGal.css';

export default function GizzyGal(){
  const navigate = useNavigate()

  const goToAccount = () => {
      navigate('/account');
  }
  return (
    <>
    <div className = "gizzyHeader">
      <h1>Gizzy Gallery</h1>
    </div>
    {/* <button onClick={goToAccount} className="resetButton"><span>&#171;</span> Go To Account</button> */}
    <div class="row">
      <div className="column left" >
        <h2>Albums:</h2>
        <p>Albums go here</p>
      </div>
      <div className="column middle">
        <h2>Pictures</h2>
        <p>Pics go here...</p>
      </div>
      <div className = "column right" >
        <h2>Sorting:</h2>
        <p>Some text..</p>
      </div>
  </div>
  </>
  )
}
