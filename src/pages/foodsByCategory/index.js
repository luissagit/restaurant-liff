import { useState, useEffect } from 'react';
import ENDPOINT from '../../lib/ENDPOINT';
import FetchData from '../../lib/fetchData';
import List from '../../components/list';

const FoodsByCategory = (props) => {
	const categoryId = props.match.params.categoryId;

	const [datas, setDatas] = useState([]);
	const [loading, setLoading] = useState(null);

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

	return(
		<div className="mx-4">
			<List datas={datas} category={categoryId} loading={loading} />
		</div>
	);
}

export default FoodsByCategory;