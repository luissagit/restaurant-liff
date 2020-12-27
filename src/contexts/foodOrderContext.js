import { createContext, useReducer, useEffect } from 'react';
import { FoodOrderReducer } from '../reducers/foodOrderReducer';

export const FoodOrderContext = createContext();

const FoodOrderContextProvider = (props) => {
	const [foods, dispatch] = useReducer(FoodOrderReducer, [], () => {
		const localData = localStorage.getItem('foods');
		return localData ? JSON.parse(localData) : [];
	});

	useEffect(() => {
		localStorage.setItem('foods', JSON.stringify(foods))
	}, [foods]);

	return(
		<FoodOrderContext.Provider value={{foods, dispatch}} >
			{props.children}
		</FoodOrderContext.Provider>
	);
}

export default FoodOrderContextProvider;