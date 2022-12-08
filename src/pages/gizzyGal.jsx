import React, {useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './gizzyGal.css';

import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import UploadForm from '../comps/UploadForm';
import ImageGrid from '../comps/ImageGrid';
import Modal from '../comps/Modal';

var selectedImg = null;

export default function GizzyGal(){
  const { docs } = useFirestore('images');
  const navigate = useNavigate()
  const [selectedImg, setSelectedImg] = useState(null);

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
        <UploadForm />
        <ImageGrid setSelectedImg={setSelectedImg} />
      </div>
      <div className = "column right" >
        <div className = "sortingFunc">
          <h2>Sorting:</h2>
        </div>
        <div className = "sharingFunc">
          <h1>Share</h1>
        </div>
      </div>
        { selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
  </div>
  </>
  )
}
