import { useState, useEffect, memo } from 'react';
import Recommendation from '../../components/recommendation';
import Categories from '../../components/categories';
import List from '../../components/list';
import FetchData from '../../lib/fetchData';
import ENDPOINT from '../../lib/ENDPOINT';
import { Helmet } from "react-helmet";

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
			<Helmet>
				<title>Foodee - Makan Murah Sepuasnya</title>
				<meta name="title" content="Foodee - Makan Murah Sepuasnya" />
				<meta name="description" content="Foodee adalah tempat mencari serta memesan makanan secara online sepuasnya, dengan harga terjangkau." />
				
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://foodee-omega.vercel.app/" />
				<meta property="og:title" content="Foodee - Makan Murah Sepuasnya" />
				<meta property="og:description" content="Foodee adalah tempat mencari serta memesan makanan secara online sepuasnya, dengan harga terjangkau." />
				<meta property="og:image" content={recommendations.length > 0 ? (recommendations[0].image) : ('') }/>

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://foodee-omega.vercel.app" />
				<meta property="twitter:title" content="Foodee - Makan Murah Sepuasnya" />
				<meta property="twitter:description" content="Foodee adalah tempat mencari serta memesan makanan secara online sepuasnya, dengan harga terjangkau." />
				<meta property="twitter:image" content={recommendations.length > 0 ? (recommendations[0].image) : ('') } />
			</Helmet>
			<Recommendation recommendations={recommendations} loading={loading} />
			<Categories categories={categories} loading={loading} />
			<List all datas={allmenu} loading={loading} />
		</div>
	);
}

export default memo(Home);