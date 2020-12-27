import Hero from '../hero';
import Profile from '../profile';
import { memo } from 'react';

const Header = () => {
	return(
		<div id="header" className="w-full relative">
			<Hero />
			<Profile />
		</div>
	);
}

export default memo(Header);