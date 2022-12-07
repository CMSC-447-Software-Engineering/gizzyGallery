import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './gizzyGal.css';

import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

export default function GizzyGal(){
  const { docs } = useFirestore('images');
  const navigate = useNavigate()

  const goToAccount = () => {
      navigate('/account');
  }
  return (
    <>
    <div className = "gizzyHeader">
      <h1>Gizzy Gallery</h1>
    </div>
    <button onClick={goToAccount} className="userAccount"><span>&#171;</span> Go To Account</button>
    <div class="row">
      <div className="column left" >
        <h2>Albums:</h2>
        <p>Albums go here</p>
      </div>
      <div className="column middle">
        <h2>Pictures</h2>
		<div className="img-grid">
			{docs && docs.map(doc => (
				<motion.div className="img-wrap" key={doc.id} layout whileHover={{opacity : 1}}>
				<motion.img src={doc.url} alt="uploaded pic" initial={{opacity : 0}} animate={{opacity : 1}} transistion={{delay : 1}}/>
				</motion.div>
			))}
		</div>
      </div>
      <div className = "column right" >
        <h2>Sorting:</h2>
        <p>Some text..</p>
      </div>
  </div>
  </>
  )
}