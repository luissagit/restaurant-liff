import Pages from './pages';
import { BrowserRouter } from 'react-router-dom';
import AddressContextProvider from './contexts/addressContext';
import FoodOrderContextProvider from './contexts/foodOrderContext';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
    	<AddressContextProvider>
    		<FoodOrderContextProvider>
    			<BrowserRouter>
		    		<Pages />
		    	</BrowserRouter>
    		</FoodOrderContextProvider>
    	</AddressContextProvider>
    </div>
  );
}

export default App;
