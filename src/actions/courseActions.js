/**
 * Created by n0256343 on 3/21/2017.
 */
import * as types from './actionsTypes';

export function createCourse(course) {
    return {type: types.CREATE_COURSE, course};
}