import { useState, useEffect } from 'react';
import Recommendation from '../../components/recommendation';
import Categories from '../../components/categories';
import List from '../../components/list';
import FetchData from '../../lib/fetchData';
import ENDPOINT from '../../lib/ENDPOINT';

const Home = () => {
	const [recommendations, setRecommendations] = useState([]);
	const [categories, setCategories] = useState([]);
	const [allmenu, setAllmenu] = useState([]);
	const [loading, setLoading] = useState(null);

	useEffect(() => {
		const fetchData = async() => {
			setLoading(true);
			try {
				const resRecommendations = await FetchData(ENDPOINT.recommendations);
				const resCategories = await FetchData(ENDPOINT.categories);
				const resAllmenu = await FetchData(ENDPOINT.allFoods);

				setRecommendations(resRecommendations);
				setCategories(resCategories);
				setAllmenu(resAllmenu);
				setLoading(false);
			} catch(error) {
				setRecommendations([]);
				setCategories([]);
				setAllmenu([]);
				setLoading(false);
			}
		}
		fetchData();
	}, []);

	return(
		<div className="mx-4">
			<Recommendation recommendations={recommendations} loading={loading} />
			<Categories categories={categories} loading={loading} />
			<List all datas={allmenu} loading={loading} />
		</div>
	);
}

export default Home;