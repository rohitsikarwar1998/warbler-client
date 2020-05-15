import { SET_CURRENT_USER } from '../actionTypes';
import { apiCall ,setTokenHeader} from '../../services/api';
import {addError,removeError} from './errors';

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    };
};

export function setAuthorizationToken(token){
    setTokenHeader(token);
};

export function logout(){
    return dispatch=>{
        localStorage.clear();
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}))
    };
};

export function authUser(type, userData) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            return apiCall('post', `https://warbler-es.herokuapp.com/api/auth/${type}`, userData).then(({ token, ...user }) => {
                localStorage.setItem("jwtToken", token);
                dispatch(setCurrentUser(user));
                setAuthorizationToken(token);
                dispatch(removeError());
                resolve();
            })
            .catch(err=>{
                dispatch(addError(err.message));
                reject();
            })
        })
    }
}
