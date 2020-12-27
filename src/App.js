import Pages from './pages';
import { BrowserRouter } from 'react-router-dom';
import AddressContextProvider from './contexts/addressContext';
import FoodOrderContextProvider from './contexts/foodOrderContext';

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
