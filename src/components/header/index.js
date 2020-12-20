import Hero from '../hero';
import Profile from '../profile';

const Header = () => {
	return(
		<div id="header" className="w-full relative">
			<Hero />
			<Profile />
		</div>
	);
}

export default Header;