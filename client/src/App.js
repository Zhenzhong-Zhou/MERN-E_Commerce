import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Category, Home, Product} from "./pages";

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={"/"} component={Home}/>
				<Route exact path={"/categories"} component={Category}/>
				<Route exact path={"/products"} component={Product}/>
			</Switch>
		</BrowserRouter>
	);
};

export default App;