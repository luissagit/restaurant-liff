import Header from '../components/header';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import FoodsByCategory from './foodsByCategory';
import FoodDetail from './foodDetail';

const Pages = () => {
	return(
		<div id="app" className="bg-primary-200 text-gray-700 min-h-screen">
			<header>
				<Header />
			</header>
			<main className="pt-56 pb-6">
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/home' component={Home} />
					<Route path='/category/:categoryId' component={FoodsByCategory} />
					<Route path='/food/:foodId' component={FoodDetail} />
				</Switch>
			</main>
			<footer>
				tes
			</footer>
		</div>
	);
}

export default Pages;