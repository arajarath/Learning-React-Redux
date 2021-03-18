import * as types from './ActionTypes';
import * as courseApi from '../../api/courseApi';

export function CreateCourse(course) {
    return {
        type: types.CREATE_COURSE,
        course
    }
}

export function loadCourseSuccess(courses) {
    return {type: types.LOAD_COURSE_SUCCESS, courses}
}

export function loadCourses() {
    return function (dispatch) {
        return courseApi.getCourses().then(courses => {
            dispatch(loadCourseSuccess(courses));
        }).catch(error => {
            throw error;
        })
    }
}