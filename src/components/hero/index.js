import { useEffect, useState } from 'react';
import ENDPOINT from '../../lib/ENDPOINT';
import FetchData from '../../lib/fetchData';

const Hero = () => {
	const [image, setImage] = useState(null);

	useEffect(() => {
		const fetchData = async() => {
			try {
				const resImage = await FetchData(ENDPOINT.heroImage);
				setImage(resImage[0].image);
			} catch (error) {
				setImage(null);
			}	
		}
		fetchData();
	}, [])

	return(
		<div className="absolute w-full top-0 z-30">
			<div className="">
				<img src={!!image ? (image): ('')} alt="recomendation today" className="object-cover w-full h-40"/>
			</div>
		</div>
	)
}

export default Hero;