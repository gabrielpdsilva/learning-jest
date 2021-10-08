import './App.css';
import Calculator from './pages/Calculator';
import Login from './pages/Login';
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
				<Route path="/login">
					<Login />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
