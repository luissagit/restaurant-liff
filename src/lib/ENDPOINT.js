const BASE_URL = process.env.REACT_APP_BASE_URL;

const ENDPOINT = {
	recommendations : BASE_URL + 'foods?_sort=published_at:DESC&_limit=2',
	heroImage : BASE_URL + 'foods?_sort=published_at:DESC&_limit=1',
	categories: BASE_URL + 'categories',
	allFoods : BASE_URL + 'foods',
	getByCategory : BASE_URL + 'foods?categories.name='
};

export default ENDPOINT;