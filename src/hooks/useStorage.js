import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  var oldUrl = 0;  

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images');    

    storageRef.put(file).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
      const url = await storageRef.getDownloadURL();
      if(oldUrl==0){
      	const createdAt = timestamp();
      	await collectionRef.add({ url, createdAt });
      	setUrl(url);
        oldUrl=1;
      }
      else
        oldUrl=0;
    });
  }, [file]);

  return { progress, url, error };
}

export default useStorage;