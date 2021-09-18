import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Cart, Category, Home, Login, Product, Register} from "./pages";

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={"/register"} component={Register}/>
				<Route exact path={"/login"} component={Login}/>
				<Route exact path={"/"} component={Home}/>
				<Route exact path={"/categories"} component={Category}/>
				<Route exact path={"/products"} component={Product}/>
				<Route exact path={"/cart"} component={Cart}/>
			</Switch>
		</BrowserRouter>
	);
};

export default App;