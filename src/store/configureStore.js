/**
 * Created by n0256343 on 3/21/2017.
 */
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialStore) {
    return createStore(
        rootReducer,
        initialStore,
        applyMiddleware(reduxImmutableStateInvariant())
    );
}