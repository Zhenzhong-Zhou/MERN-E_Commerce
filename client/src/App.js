import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Category, Home, Login, Product, Register} from "./pages";

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={"/register"} component={Register}/>
				<Route exact path={"/login"} component={Login}/>
				<Route exact path={"/"} component={Home}/>
				<Route exact path={"/categories"} component={Category}/>
				<Route exact path={"/products"} component={Product}/>
			</Switch>
		</BrowserRouter>
	);
};

export default App;