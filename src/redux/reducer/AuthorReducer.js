import * as types from '../actions/ActionTypes';

export default function AuthorReducer(state= [], actions) {
    switch(actions.type) {
        case types.LOAD_AUTHOR_SUCCESS:
            return actions.authors;
        default:
            return state;
    }
}