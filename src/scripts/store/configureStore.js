import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
    const logger = createLogger();
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunk, logger),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );

    return store;
}
