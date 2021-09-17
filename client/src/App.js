import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Category, Home} from "./pages";

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={"/"} component={Home}/>
				<Route exact path={"/categories"} component={Category}/>
			</Switch>
		</BrowserRouter>
	);
};

export default App;