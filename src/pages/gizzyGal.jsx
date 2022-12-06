import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function GizzyGal(){
  const navigate = useNavigate()

  const goToAccount = () => {
      navigate('/account');
  }
  return (
    <div >
        <h1>This is where users photo album will be</h1>
        <button onClick={goToAccount} className="resetButton" ><span>&#171;</span> Go To Account</button>
    </div>
  )
}
