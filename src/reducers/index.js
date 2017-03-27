/**
 * Created by n0256343 on 3/21/2017.
 */
import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
    courses,
    authors
});

export default rootReducer;