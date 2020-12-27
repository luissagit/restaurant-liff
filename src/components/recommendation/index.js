import { memo } from 'react';
import Card from '../card';
import Skeleton from '../skeleton';

const Recommendation = ({ recommendations, loading }) => {
	return(
		<div id="reccomendation">
			<h2 className="font-semibold text-xl">
				Rekomendasi
			</h2>
			<div className="grid grid-cols-2 gap-4 mt-2">
				{
					!!recommendations ? (
						recommendations.map((recommendation, index) => {
							return <Card data={recommendation} key={index} />
						})
					) : ('')
				}
			</div>
			{
				!!loading ? (
					<div className="grid grid-cols-2 gap-4 mt-2">
						<Skeleton type={'recommendation'} />
						<Skeleton type={'recommendation'} />
					</div>
				) : ('')
			}
		</div>
	);
}

export default memo(Recommendation);