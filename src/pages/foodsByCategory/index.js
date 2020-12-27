import { useState, useEffect, memo } from 'react';
import ENDPOINT from '../../lib/ENDPOINT';
import FetchData from '../../lib/fetchData';
import List from '../../components/list';
import Carousel from '../../components/categories/carousel';
import { Helmet } from "react-helmet";

const FoodsByCategory = (props) => {
	const categoryId = props.match.params.categoryId;

	const [datas, setDatas] = useState([]);
	const [loading, setLoading] = useState(null);
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		setLoading(true);
		const fetchData = async() => {
			try {
				const resDatas = await FetchData(ENDPOINT.getByCategory + categoryId);
				setDatas(resDatas);
				setLoading(false);
			} catch(error) {
				setDatas([]);
				setLoading(false);
			}
		}
		fetchData();
	}, [categoryId]);

	useEffect(() => {
		setLoading(true);
		const fetchData = async() => {
			try {
				const resDatas = await FetchData(ENDPOINT.categories);
				setCategories(resDatas);
				setLoading(false);
			} catch(error) {
				setCategories([]);
				setLoading(false);
			}
		}
		fetchData();
	}, []);

	return(
		<div className="mx-4">
			<Helmet>
				<title>{categoryId + ' food - Foodee'}</title>
				<meta name="title" content={categoryId + ' food - Foodee'} />
				<meta name="description" content={'Jelajahi makanan ' + categoryId + ' di foodee, dijamin lengkap'} />
				
				<meta property="og:type" content="website" />
				<meta property="og:url" content={'https://foodee-omega.vercel.app/category/' + categoryId} />
				<meta property="og:title" content={categoryId + ' food - Foodee'} />
				<meta property="og:description" content={'Jelajahi makanan ' + categoryId + ' di foodee, dijamin lengkap'} />
				<meta property="og:image" content={datas.length > 0 ? (datas[0].image) : ('https://foodee-omega.vercel.app/logo.png') } />

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content={'https://foodee-omega.vercel.app/category/' + categoryId} />
				<meta property="twitter:title" content={categoryId + ' food - Foodee'} />
				<meta property="twitter:description" content={'Jelajahi makanan ' + categoryId + ' di foodee, dijamin lengkap'} />
				<meta property="twitter:image" content={datas.length > 0 ? (datas[0].image) : ('https://foodee-omega.vercel.app/logo.png') } />
			</Helmet>

			<div className="overflow-x-hidden overflow-y-visible">
				<Carousel categories={categories} loading={loading} />
			</div>
			<List datas={datas} category={categoryId} loading={loading} />
		</div>
	);
}

export default memo(FoodsByCategory);