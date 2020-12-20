import { useState, useEffect } from 'react';
import ENDPOINT from '../../lib/ENDPOINT';
import FetchData from '../../lib/fetchData';
import Detail from '../../components/detail';

const FoodDetail = (props) => {
	const foodId = props.match.params.foodId;

	const [data, setData] = useState({});
	const [loading, setLoading] = useState(null);

	useEffect(() => {
		setLoading(true);
		const fetchData = async() => {
			try {
				const resData = await FetchData(ENDPOINT.allFoods + '/' + foodId.toString());
				setData(resData);
				setLoading(false);
			} catch(error) {
				setData({});
				setLoading(false);
			}
		}
		fetchData();
	}, [foodId]);

	return(
		<div>
			<Detail data={data} loading={loading} />
		</div>
	);
}

export default FoodDetail;