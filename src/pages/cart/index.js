import { memo, useContext, useState, useEffect } from 'react';
import { FoodOrderContext } from '../../contexts/foodOrderContext';
import CurrencyConverter from '../../lib/currencyConverter';
import { NavLink } from 'react-router-dom';
import ConfirmButton from './confirmButton';
import { Helmet } from "react-helmet";

const Cart = () => {
	const { foods, dispatch } = useContext(FoodOrderContext);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const newTotal = foods.reduce((accumulator, current) =>
			accumulator + (current.price * current.quantity), 0
		);
		setTotal(newTotal);
	}, [foods])

	const handleReduceOrder = (quantity, id) => {
		if(quantity <= 1) {
			const dialogConfirm = window.confirm('Anda akan menghapus menu dari pesanan?');
			if(dialogConfirm === true) {
				const newOrder = foods.filter((food) => food.id !== id);

				dispatch({
					type: 'EDIT_ORDER',
					foods: newOrder
				})
				return true;
			} else {
				return false;
			}
		} else if(quantity > 1 || quantity < 5) {
			let newOrder = [...foods];
			const foodIndex = newOrder.findIndex((order) => order.id === id);
			newOrder[foodIndex].quantity = newOrder[foodIndex].quantity - 1;

			dispatch({
				type: 'EDIT_ORDER',
				foods: newOrder
			})
		}
	}

	const handleAddOrder = (quantity, id) => {
		if(quantity < 5) {
			let newOrder = [...foods];
			const foodIndex = newOrder.findIndex((order) => order.id === id);
			newOrder[foodIndex].quantity = newOrder[foodIndex].quantity + 1;

			dispatch({
				type: 'EDIT_ORDER',
				foods: newOrder
			})
		} else {
			alert('Anda hanya diperbolehkan membeli 5 untuk tiap menu!');
		}
	}

	return(
		<div className="mx-4 shadow-md rounded-md px-4 py-8 bg-white">
			<Helmet>
				<title>Keranjang - Foodee - Makan Murah Sepuasnya</title>
				<meta name="title" content="Profil - Foodee - Makan Murah Sepuasnya" />
				<meta name="description" content="Foodee adalah tempat mencari serta memesan makanan secara online sepuasnya, dengan harga terjangkau." />
			</Helmet>

			<h2 className="font-semibold text-xl">Keranjang Belanja</h2>
			<div className="mt-4">
				{
					foods.map((food, index) => {
						return(
							<div className="flex justify-between items-center mb-2" key={index}>
								<div>
									<NavLink to={'/food/' + food.id} >
										<h3 className="font-semibold text-lg text-green">{food.name}</h3>
									</NavLink>
									<p className="font-light">{CurrencyConverter(food.price)}</p>
								</div>
								<div className="flex justify-between items-center">
									<button className="bg-green text-white w-8 h-8 rounded-md" onClick={() => handleReduceOrder(food.quantity, food.id)}>-</button>
									<p className="p-2">{food.quantity}</p>
									<button className="bg-green text-white w-8 h-8 rounded-md" onClick={() => handleAddOrder(food.quantity, food.id)}>+</button>
								</div>
							</div>
						);
					})
				}
			</div>
			<div className="mt-4">
				<p className="text-lg">total : {CurrencyConverter(total)}</p>
			</div>
			<ConfirmButton />
		</div>
	);
}

export default memo(Cart);