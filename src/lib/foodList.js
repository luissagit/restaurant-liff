import ENDPOINT from './ENDPOINT';
import FetchData from './fetchData';

export const getAllCategories = async () => {

	const categories = await FetchData(ENDPOINT.categories);

	return categories.map((category, index) => {
		return {
			params: {
				name: category.name
			}
		}
	})
}

export const getAllFoods = async () => {
	const foods = await FetchData(ENDPOINT.allFoods);

	return foods.map((food, index) => {
		return {
			params: {
				id: food.id.toString()
			}
		}
	})
}