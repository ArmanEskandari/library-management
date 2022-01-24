import {applyMiddleware, compose, createStore} from "redux";
import {reducers} from "./store.reducers";
import {middlewares, sagaMiddleware} from "./store.middlewares";
import {rootStoreSaga} from "./store.saga";


// @ts-ignore
const composeEnhancer = process.env.NODE_ENV === "development" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;


// Get store from storage
const persistedState = localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState')!)
    : {}

export const appStore = createStore(reducers, persistedState, composeEnhancer(applyMiddleware(...middlewares)))

// Set store to storage
appStore.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(appStore.getState()))
})

// Run Saga
sagaMiddleware.run(rootStoreSaga);