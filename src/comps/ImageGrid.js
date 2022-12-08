import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import { projectFirestore } from '../firebase/config';

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');
  const db = projectFirestore.collection('images');

  return (
    <div className="img-grid">
      {docs && docs.map(doc => (
        <motion.div className="img-wrap" key={doc.id} 
          layout
          whileHover={{ opacity: 1 }}
          onClick={() => setSelectedImg(doc.url)}
        >
          <motion.img src={doc.url} alt="uploaded pic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
          <button type="button" class="layer" onClick={() => db.doc(doc.id).delete()}>
            X
          </button>
          
        </motion.div>
        
      ))}
    </div>
  )
}

export default ImageGrid;