/**
 * Created by n0256343 on 3/21/2017.
 */
import * as types from '../actions/actionsTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
    switch(action.type) {
        case types.CREATE_COURSE:
            return [...state, Object.assign({}, action.course)];
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;
        default:
            return state;
    }
}