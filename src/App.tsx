import './App.css';
import Calculator from './pages/Calculator';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/calculadora">
					<Calculator />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
