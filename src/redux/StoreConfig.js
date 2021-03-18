import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from './reducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function StoreConfig (initialState) {
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(
         rootReducer,
         initialState,
         composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
    )
}