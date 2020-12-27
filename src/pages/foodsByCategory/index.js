import { useState, useEffect, memo } from 'react';
import ENDPOINT from '../../lib/ENDPOINT';
import FetchData from '../../lib/fetchData';
import List from '../../components/list';
import Carousel from '../../components/categories/carousel';

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
			<div className="overflow-x-hidden overflow-y-visible">
				<Carousel categories={categories} loading={loading} />
			</div>
			<List datas={datas} category={categoryId} loading={loading} />
		</div>
	);
}

export default memo(FoodsByCategory);