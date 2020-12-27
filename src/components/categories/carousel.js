import Slider from "react-slick";
import Card from '../card';

const Carousel = ({ categories, loading }) => {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000
	};

	if(!!loading) {
		return <div></div>
	} else if(!loading && categories) {
		return(
			<div className="my-4">
				<Slider {...settings}>
					{
						!!categories ? (
							categories.map((category, index) => {
								return <Card category data={category} key={index} />
							})
						) : ('')
					}
				</Slider>
			</div>
		);
	} else {
		return <div></div>
	}
}

export default Carousel;