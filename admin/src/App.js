import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {NavBar, SideBar} from "./components";
import "./App.css";
import {Home, Login, NewProduct, NewUser, Product, ProductList, User, UserList} from "./pages";

const App = () => {
	return (
		<BrowserRouter>
			<Route exact path={"/login"} component={() => <Login/>}/>
			<NavBar/>
			<div className={"container"}>
				<SideBar/>
				<Switch>
					<Route exact path={"/"} component={Home}/>
					<Route exact path={"/users"} component={UserList}/>
					<Route exact path={"/user/:userId"} component={User}/>
					<Route exact path={"/newUser"} component={NewUser}/>
					<Route exact path={"/products"} component={ProductList}/>
					<Route exact path={"/product/:productId"} component={Product}/>
					<Route exact path={"/newProduct"} component={NewProduct}/>
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default App;