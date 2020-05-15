import { SET_CURRENT_USER } from '../actionTypes';

const DEFAULT_STATE={
    isAuthenticated:false, //hopefully true when user login
    user:{}    //user information when user log in
}

export default (state=DEFAULT_STATE,action)=>{
    switch(action.type){
        case SET_CURRENT_USER:
            return{
                // if action.user empty then user not logged in and if action.user
                // have some keys then user is logged in
                isAuthenticated:!!Object.keys(action.user).length,
                user:action.user
            };
        default:
            return state;
    }
};
