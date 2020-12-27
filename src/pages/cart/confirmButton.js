import { FoodOrderContext } from '../../contexts/foodOrderContext';
import { AddressContext } from '../../contexts/addressContext';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

const ConfirmButton = () => {
	const { foods } = useContext(FoodOrderContext);

	const { address } = useContext(AddressContext);
	
	const handleCOnfirmOrder = () => {

	}

	if(foods.length > 0 && address.address.length > 7) {
		return(
			<div className="flex justify-between items-center fixed bottom-0 left-0 w-screen p-4">
				<button className="w-full text-center bg-green p-2 rounded-md text-white font-semibold" onClick={() => handleCOnfirmOrder()}>Konfirmasi Pesanan</button>
			</div>
		)
	} else if(foods.length > 0 && address.address.length <= 7 ) {
		return(
			<div className="flex justify-between items-center fixed bottom-0 left-0 w-screen p-4">
				<div className="w-full text-center bg-gray-400 p-2 rounded-md text-white font-semibold">Harap perbaiki alamat anda di <NavLink className="text-yellow-300" to={'/profile'}>profile</NavLink></div>
			</div>
		);
	} else {
		return(
			<div className="flex justify-between items-center fixed bottom-0 left-0 w-screen p-4">
				<div className="w-full text-center bg-gray-400 p-2 rounded-md text-white font-semibold">Silahkan buat order</div>
			</div>
		);
	}
}

export default ConfirmButton;