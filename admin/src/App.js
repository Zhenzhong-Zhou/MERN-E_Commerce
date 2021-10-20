import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {useSelector} from "react-redux";
import {NavBar, SideBar} from "./components";
import "./App.css";
import {Home, Login, NewProduct, NewUser, NotFound, Product, ProductList, User, UserList} from "./pages";

const App = () => {
	const admin = useSelector(state => state.user.currentUser);
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={"/login"} component={() => (admin ? <Redirect to={"/"}/> : <Login/>)}/>
				{admin ? (
					<>
						<NavBar/>
						<div className={"container"}>
							<SideBar/>
							<Route exact path={"/"} component={Home}/>
							<Route exact path={"/users"} component={UserList}/>
							<Route exact path={"/user/:userId"} component={User}/>
							<Route exact path={"/newUser"} component={NewUser}/>
							<Route exact path={"/products"} component={ProductList}/>
							<Route exact path={"/product/:productId"} component={Product}/>
							<Route exact path={"/newProduct"} component={NewProduct}/>
						</div>
					</>
				) : <Redirect to={"/login"}/>}
				<Route exact path={""} component={NotFound}/>
			</Switch>
		</BrowserRouter>
	);
};

export default App;