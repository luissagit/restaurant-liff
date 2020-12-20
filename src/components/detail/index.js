import { NavLink } from 'react-router-dom';
import CurrencyConverter from '../../lib/currencyConverter';
import { useState } from 'react';
import Loading from '../loading';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const Detail = ({ data, loading }) => {
	const [quantity, setQuantity] = useState(0);

	const category = data.categories ? (data.categories[0].name) : ('');

	if(quantity < 0) {
		setQuantity(0);
	}

	if(quantity > 5) {
		setQuantity(5);
	}

	return(
		<div className="mx-4 shadow-md rounded-md px-4 py-8 bg-white">
			<div>
				{
					!!loading ? (
						<Loading />
					) : (
						<LazyLoadImage src={data.image_hd} alt={data.name} className="w-full object-cover rounded-md" wrapperClassName="w-full object-cover rounded-md"/>
					)
				}
			</div>
			<div className="mt-4">
				<div className="flex justify-between items-center">
					<h2 className="text-xl font-bold">
						{data.name}
					</h2>
					<p className="mt-2 text-right">
						{quantity > 0 ? (CurrencyConverter(data.price*quantity)) : (CurrencyConverter(data.price))}
					</p>
				</div>
				<div className="mt-4 flex justify-end">
					<button className="w-8 h-10 bg-green text-white font-semibold text-xl rounded-lg" onClick={() => setQuantity(quantity-1)}>
						-
					</button>
					<div className="w-10 h-10 font-semibold text-xl flex items-center justify-center">{quantity}</div>
					<button className="w-8 h-10 bg-green text-white font-semibold text-xl rounded-lg" onClick={() => setQuantity(quantity+1)}>
						+
					</button>
				</div>
				<p className="mt-4">
					{data.description}
				</p>
				<p className="mt-4">
					Telusuri menu lain dalam <NavLink to={'/category/' + category}><span className="font-semibold text-green">{category}</span></NavLink>
				</p>
			</div>
		</div>
	);
}

export default Detail;