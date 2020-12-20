import Card from '../card';
import Skeleton from '../skeleton';

const Categories = ({ categories, loading }) => {
	return(
		<div id="categories" className="mt-2">
			<h2 className="font-semibold text-xl">
				Kategori
			</h2>
			<div className="grid grid-cols-3 gap-4 mt-2">
				{
					!!categories ? (
						categories.map((category, index) => {
							return <Card category data={category} key={index} />
						})
					) : ('')
				}
			</div>
			{
				!!loading ? (
					<div className="grid grid-cols-3 gap-4 mt-2">
						<Skeleton type={'categories'} />
						<Skeleton type={'categories'} />
						<Skeleton type={'categories'} />
						<Skeleton type={'categories'} />
						<Skeleton type={'categories'} />
					</div>
				) : ('')
			}
		</div>
	);
}

export default Categories;