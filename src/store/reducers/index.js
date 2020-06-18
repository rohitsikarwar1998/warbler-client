import {combineReducers} from 'redux';
import currentUser from './currentUser';
import errors from './errors';
import blogs from './blogs';
import responses from './responses';

const rootReducer = combineReducers({
    currentUser,
    errors,
    blogs,
    responses,
});

export default rootReducer;