/**
 * Created by n0256343 on 4/4/2017.
 */
import * as types from '../actions/actionsTypes';
import initialState from './initialState';

function actionTypesEndsInSuccess(type) {
    return type.substring(type.length - 8) == '_SUCCESS';
}

export default function ajaxStatusReducer(state = initialState.numAjaxCallsInProgress, action) {
    if (action.type == types.BEGIN_AJAX_CALL) {
        return state + 1;
    } else if (action.type == types.AJAX_CALL_ERROR || actionTypesEndsInSuccess(action.type)) {
        return state - 1;
    }
    return state;
}