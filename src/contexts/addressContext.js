import { createContext, useReducer, useEffect } from 'react';
import { AddressReducer } from '../reducers/addressReducer';

export const AddressContext = createContext();

const AddressContextProvider = (props) => {
	const [address, dispatch] = useReducer(AddressReducer, {}, () => {
		const localData = localStorage.getItem('address');
		return localData ? JSON.parse(localData) : {};
	});

	useEffect(() => {
		localStorage.setItem('address', JSON.stringify(address))
	}, [address]);

	return(
		<AddressContext.Provider value={{address, dispatch}} >
			{props.children}
		</AddressContext.Provider>
	);
}

export default AddressContextProvider;