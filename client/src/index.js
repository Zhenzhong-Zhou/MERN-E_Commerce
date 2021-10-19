import reactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {store, persi_store} from "./redux/store";

reactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persi_store}>
			<App />
		</PersistGate>
	</Provider>, document.getElementById("root"));