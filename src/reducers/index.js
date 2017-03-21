/**
 * Created by n0256343 on 3/21/2017.
 */
import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
    courses
})

export default rootReducer;