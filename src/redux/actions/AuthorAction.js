import * as types from './ActionTypes';
import * as authorApi from '../../api/authorApi';

export function loadAuthorSuccess(authors) {
    return {type: types.LOAD_AUTHOR_SUCCESS, authors}
}

export function loadAuthors() {
    return function(dispatch) {
        return authorApi.getAuthors().then(authors => {
            dispatch(loadAuthorSuccess(authors))
        }).catch(error => {
            throw error;
        })
    }
}