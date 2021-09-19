import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Cart, Category, Home, Login, NotFound, Product, Register} from "./pages";
import "./App.css";

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
				<Route exact path={""} component={NotFound}/>
			</Switch>
		</BrowserRouter>
	);
};

export default App;