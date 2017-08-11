import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers/rootReducer";

export default function configureStore(initialState) {
    const logger = createLogger();
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(logger),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );

    return store;
}
