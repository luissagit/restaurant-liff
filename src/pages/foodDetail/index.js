import { useState, useEffect, memo } from 'react';
import ENDPOINT from '../../lib/ENDPOINT';
import FetchData from '../../lib/fetchData';
import Detail from '../../components/detail';
import { Helmet } from "react-helmet";

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
		<div className="pb-14">
			<Helmet>
				<title>{data.name ? (data.name + ' - Foodee') : ('detail food')}</title>
				<meta name="title" content={data.name + ' - Foodee'} />
				<meta name="description" content={data.description} />
				
				<meta property="og:type" content="website" />
				<meta property="og:url" content={'https://foodee-omega.vercel.app/food/' + data.id} />
				<meta property="og:title" content={data.name + ' - Foodee'} />
				<meta property="og:description" content={data.description} />
				<meta property="og:image" content={data.image} />

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content={'https://foodee-omega.vercel.app/food/' + data.id} />
				<meta property="twitter:title" content={data.name + ' - Foodee'} />
				<meta property="twitter:description" content={data.description} />
				<meta property="twitter:image" content={data.image} />
			</Helmet>

			<Detail data={data} loading={loading} />
		</div>
	);
}

export default memo(FoodDetail);