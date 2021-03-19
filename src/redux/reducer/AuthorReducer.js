import * as types from '../actions/ActionTypes';
import InitialState from './InitialState';

export default function AuthorReducer(state= InitialState.authors, actions) {
    switch(actions.type) {
        case types.LOAD_AUTHOR_SUCCESS:
            return actions.authors;
        default:
            return state;
    }
}