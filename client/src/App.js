import {useSelector} from "react-redux";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {Cart, Category, Home, Login, NotFound, Payment, Product, Register, Success} from "./pages";
import "./App.css";

const App = () => {
	const user = useSelector(state => state.user.currentUser);
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={"/register"} component={() => (user ? <Redirect to={"/"}/> : <Register/>)}/>
				<Route exact path={"/login"} component={() => (user ? <Redirect to={"/"}/> : <Login/>)}/>
				<Route exact path={"/"} component={Home}/>
				<Route exact path={"/categories/:category"} component={Category}/>
				<Route exact path={"/product/:id"} component={Product}/>
				<Route exact path={"/cart"} component={Cart}/>
				<Route exact path={"/payment"} component={Payment}/>
				<Route exact path={"/success"} component={Success}/>
				<Route exact path={""} component={NotFound}/>
			</Switch>
		</BrowserRouter>
	);
};

export default App;