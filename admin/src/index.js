import reactDOM from "react-dom";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import App from "./App";
import {persi_store, store} from "../../client/src/redux/store";

reactDOM.render(
	<Provider store={store}>
		<PersistGate loading={"null"} persistor={persi_store}>
			<App />
		</PersistGate>
	</Provider>, document.getElementById("root"));