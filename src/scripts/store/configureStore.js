import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/rootReducer";
import { ping } from "../enhancers/ping";

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(ping),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );

    return store;
}
