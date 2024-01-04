import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { Provider } from "react-redux"; //Used to wrap the app in the store and allow access to the store from any component
import { store } from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
