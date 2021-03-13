import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer';
import {reduxImmutableStateInvariant} from 'redux-immutable-state-invariant';

export default function StoreConfig(initialState = {}) {
    //Add support for Redux dev tools
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
    );
}
