/**
 * Created by n0256343 on 3/21/2017.
 */
import * as types from './actionsTypes';
import courseApi from '../api/mockCourse';

export const createCourse = course => {
    return {type: types.CREATE_COURSE, course};
};

export const loadCoursesSuccess = courses => {
    return {type: types.LOAD_COURSES_SUCCESS, courses};
};

export const loadCourses = () => {
    return dispatch => {
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    };
};