import CurrencyConverter from '../../lib/currencyConverter';
import { NavLink } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { memo } from 'react';

const Card = ({ data, category, detail }) => {
	const imageStyle = () => {
		if(!!category) {
			return 'w-full h-20 object-cover rounded-md';
		} else if(!!detail) {
			return 'w-32 h-24 object-cover rounded-md';
		} else {
			return 'w-full h-24 object-cover rounded-md'
		}
	}

	return(
		<NavLink to={!!category ? ('/category/' + data.name) : ('/food/' + data.id)}>
			<div className={!!detail ? ('rounded-md shadow-md bg-white w-full flex justify-start items-center mt-2') : ('rounded-md shadow-md bg-white w-full')}>
				<div className={!!detail ? ('py-2 px-2') : ('pt-2 px-2')}>
					<LazyLoadImage
						effect="opacity"
						src={data.image}
						alt={data.name}
						className={imageStyle()}
						wrapperClassName={imageStyle()}
					/>
				</div>
				<div className="px-2 pb-1">
					<div>
						{
							!!category ? (
								<h3 className="font-semibold text-center">
									{data.name}
								</h3>
							) : (
								<h3 className="font-semibold">
									{data.name}
								</h3>
							)
						}
					</div>
					<div>
						<div>
							{!!data.price ? (CurrencyConverter(data.price)) : ('')}
						</div>
						<p className="font-light">
							{!!detail ? (data.description.substring(0, 20) + '...') : ('')}
						</p>
					</div>
				</div>
			</div>
		</NavLink>
	);

}

export default memo(Card);