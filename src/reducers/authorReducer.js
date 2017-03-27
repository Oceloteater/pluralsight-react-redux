/**
 * Created by n0256343 on 3/27/2017.
 */
import * as types from '../actions/actionsTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState.authors, action) {
    switch(action.type) {
        case types.LOAD_AUTHORS_SUCCESS:
            return action.authors;
            break;
        default:
            return state;
    }
}