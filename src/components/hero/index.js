import { useEffect, useState, memo } from 'react';
import ENDPOINT from '../../lib/ENDPOINT';
import FetchData from '../../lib/fetchData';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Hero = () => {
	const [image, setImage] = useState(null);
	const [loading, setLoading] =useState(null);

	useEffect(() => {
		setLoading(true);
		const fetchData = async() => {
			try {
				const resImage = await FetchData(ENDPOINT.heroImage);
				setImage(resImage[0].image);
				setLoading(false);
			} catch (error) {
				setImage(null);
				setLoading(false);
			}	
		}
		fetchData();
	}, [])

	return(
		<div className={!!loading ? ('absolute w-full top-0 z-30 animate-pulse') : ('absolute w-full top-0 z-30')}>
			<div className="">
				<LazyLoadImage
					effect="blur"
					src={!!image ? (image): ('')}
					alt="recomendation today"
					className="object-cover w-full h-40 bg-gray-300"
					wrapperClassName="object-cover w-full h-40 bg-gray-300"
				/>
			</div>
		</div>
	)
}

export default memo(Hero);