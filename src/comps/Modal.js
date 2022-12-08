import React from 'react';
import { motion } from 'framer-motion';
import Bugger from './Bugger';

const Modal = ({ setSelectedImg, selectedImg, docs }) => {
	const handle_keydown = (e) => {
		if(selectedImg && (e.key === "ArrowLeft" || e.key === "ArrowRight")){
			let index = -1;
			for(let i = 0; i < docs.length; i++){
				if(docs[i].url){
					if(docs[i].url === selectedImg){
						index = i;
					}
				}
			}
			if(index !== -1){
				let change_amt = 0;
				if(e.key === "ArrowLeft"){
					change_amt = -1;
				}
				else if(e.key === "ArrowRight"){
					change_amt = 1;
				}
				let new_index = (index + change_amt) % docs.length;
				let new_url = docs[new_index].url;
				setSelectedImg(new_url);
				selectedImg = new_url;
			}
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
		<div>
			<motion.div className="backdrop" onClick={handleClick}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
			>
			<motion.img src={selectedImg} alt="enlarged pic" 
				initial={{ y: "-100vh" }}
				animate={{ y: 0 }}
			/>
			</motion.div>
			<Bugger image_url={selectedImg} />
		</div>
	)
}

export default Modal;
