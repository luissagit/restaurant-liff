import { FoodOrderContext } from '../../contexts/foodOrderContext';
import { useContext } from 'react';

const CartButton = ({ loading, inCart, data }) => {
	const { dispatch } = useContext(FoodOrderContext);
	
	const handleAddToCart = () => {
		dispatch({
			type: 'ADD_TO_CART',
			food: {
				id: data.id,
				name: data.name,
				quantity: 1,
				price: data.price
			}
		})
	}

	if(loading) {
		return <div></div>
	} else if(!loading && inCart) {
		return(
			<div className="flex justify-between items-center fixed bottom-0 left-0 w-screen p-4">
				<div className="w-full text-center bg-gray-400 p-2 rounded-md text-white font-semibold">Sudah ditambahkan</div>
			</div>
		)
	} else if(inCart === false || inCart === null){
		return(
			<div className="flex justify-between items-center fixed bottom-0 left-0 w-screen p-4">
				<button className="w-full text-center bg-green p-2 rounded-md text-white font-semibold" onClick={() => handleAddToCart()}>Tambahkan ke keranjang</button>
			</div>
		);
	} else {
		return <div></div>
	}
}

export default CartButton;