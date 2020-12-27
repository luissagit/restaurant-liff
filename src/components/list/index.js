import { memo } from 'react';
import Card from '../card';
import Loading from '../loading';

const List = ({ datas, all, category, loading }) => {
	const Title = () => {
		if(all) {
			return 'Menampilkan Semua Menu'
		} else if(!!category) {
			return 'Menampilkan ' + category + ' Food'
		} else {
			return 'Menampilkan Menu'
		}
	}

	const Element = () => {
		if(loading && datas.length <= 0) {
			return <Loading />
		} else if(loading === false) {
			return <div></div>
		} else if(!datas || datas.length <= 0) {
			return <p className="text-center mt-12">Oops... Belum ada apapun disisni.</p>
		} else {
			return <div></div>
		}
	}

	return(
		<div id="list" className="mt-2">
			<h2 className="font-semibold text-xl">
				<Title />
			</h2>
			<div className="mt-2 mx-auto">
				{
					datas && datas.map((data, index) => {
						return <Card detail data={data} key={index}/>
					})
				}
			</div>
			<Element />
		</div>
	);
}

export default memo(List);