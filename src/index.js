import React from "react";
import ReactDOM from "react-dom";
import App from "./scripts/components/App";
// import { createStore } from "redux";
import { Provider } from "react-redux";
import registerServiceWorker from "./scripts/registerServiceWorker";

import "./css/index.css";
import { configureStore } from "./scripts/store/configureStore";

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();
