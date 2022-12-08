import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ setSelectedImg, selectedImg }) => {
	const handle_keydown = (e) => {
		if(selectedImg){
			console.log(selectedImg);
		}
	}
	document.addEventListener('keydown', handle_keydown, true);


  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
		selectedImg = null;
    }
  }

  return (
	  <div onKeyPress={(e) => {console.log(e)}}>
    <motion.div className="backdrop" onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img src={selectedImg} alt="enlarged pic" 
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
	  </div>
  )
}

export default Modal;
