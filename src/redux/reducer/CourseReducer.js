import * as types from "../actions/ActionTypes";
import InitialState from "./InitialState";

export default function CourseReducer(state = InitialState.courses, action) {
  switch (action.type) {
    case types.CREATE_COURSE_SUCCESS:
      return [...state, { ...action.course }];
    case types.UPDATE_COURSE_SUCCESS:
      return state.map((course) =>
        course.id === action.course.id ? action.course : course
      );
    case types.LOAD_COURSE_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
