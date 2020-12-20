const Skeleton = ({ type }) => {
	const imageStyle = () => {
		if(type === 'categories') {
			return 'w-full h-20 object-cover rounded-md bg-gray-300';
		} else if(type === 'detail') {
			return 'w-32 h-24 object-cover rounded-md bg-gray-300';
		} else {
			return 'w-full h-24 object-cover rounded-md bg-gray-300';
		}
	}

	return(
		<div className="rounded-md shadow-md bg-white w-full animate-pulse">
			<div className="pt-2 px-2">
				<div className={imageStyle()}></div>
			</div>
			<div className="p-2">
				<div className="bg-gray-300 h-4 rounded-sm w-3/4"></div>
				{
					type === 'recommendation' ? (
						<div className="bg-gray-300 h-3 rounded-sm mt-1 w-1/2"></div>
					) : ('')
				}
			</div>
		</div>
	);
}

export default Skeleton;