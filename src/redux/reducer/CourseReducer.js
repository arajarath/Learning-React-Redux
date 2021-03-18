import * as types from '../actions/ActionTypes';

export default function CourseReducer(state = [], action) {
    switch(action.type) {
        case types.CREATE_COURSE:
            return [...state, {...action.course}];
        case types.LOAD_COURSE_SUCCESS:
            return action.courses;
        default:
            return state;
    }
}