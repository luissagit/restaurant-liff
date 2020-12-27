import { NavLink } from 'react-router-dom';
import { useContext, memo, useState, useEffect } from 'react';
import Loading from '../loading';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { FoodOrderContext } from '../../contexts/foodOrderContext';
import CurrencyConverter from '../../lib/currencyConverter';
import CartButton from './cartButton';

const Detail = ({ data, loading }) => {
	const category = data.categories ? (data.categories[0].name) : ('');
	const [inCart, setInCart] = useState(null);
	const { foods } = useContext(FoodOrderContext);

	useEffect(() => {
		if(!loading) {
			if(foods.some(food => food.id === data.id)) {
				setInCart(true);
			} else {
				setInCart(false);
			}
		}
	}, [data.id, foods, loading]);

	const CategoryPointer = () => {
		return(
			<p className="mt-4">
				Telusuri menu lain dalam <NavLink to={'/category/' + category}><span className="font-semibold text-green">{category}</span></NavLink>
			</p>
		);
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
			<div className="flex justify-between items-center mt-4">
				<h2 className="font-semibold text-xl">
					{data.name}
				</h2>
				<p className="font-light text-lg">
					{!!data.price ? (CurrencyConverter(data.price)) : ('')}
				</p>
			</div>
			<div className="mt-4">
				<CartButton loading={loading} inCart={inCart} data={data} />
				<p className="mt-4">
					{data.description}
				</p>
				{
					!!loading ? ('') : (<CategoryPointer />)
				}
			</div>
		</div>
	);
}

export default memo(Detail);