import React from 'react';
import { motion } from 'framer-motion';
import exifr from 'exifr';

const Bugger = ({image_url}) => {
	if(!image_url)
		return;
	return (
		<div>
		</div>
	);

			// {exifr.parse(image_url).then((metadata) => {metadata.Artist})}

	// return (
	//   <iframe className="map_frame" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA6tfSN5vDIkYqhALotCV3z0qwFN0A7Iew&q=50.819053333333336,-0.13679166666666667">
	//   </iframe>
	// );

		// {
		// 	exifr.parse(image_url).then((metadata) => {
		// 		if(metadata.latitude && metadata.longitude){
		// 			let lat_long = metadata.latitude.toString() + "," + metadata.longitude.toString();
		// 			let url = "https://www.google.com/maps/embed/v1/place?key=AIzaSyA6tfSN5vDIkYqhALotCV3z0qwFN0A7Iew&q=" + lat_long;
		// 			(
		// 			  <iframe className="map_frame" src={url}>
		// 			  </iframe>
		// 			);
		// 		}
		// 	})
		// }
}

export default Bugger;
