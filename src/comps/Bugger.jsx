import React from 'react';
import { motion } from 'framer-motion';
import exifr from 'exifr';

const Bugger = ({image_url}) => {
	if(!image_url)
		return;
	let cached_metadata = null;
	exifr.parse(image_url).then((metadata) => {
		console.log(metadata);
		if(metadata.latitude && metadata.longitude){
			let lat_long = metadata.latitude.toString() + "," + metadata.longitude.toString();
			let url = "https://www.google.com/maps/embed/v1/place?key=AIzaSyA6tfSN5vDIkYqhALotCV3z0qwFN0A7Iew&q=" + lat_long;
			console.log(url);
			return (
			  <iframe className="map_frame" src={url}>
			  </iframe>
			);
		}
	});
}

export default Bugger;
