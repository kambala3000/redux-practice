import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState);

    return store;
}
