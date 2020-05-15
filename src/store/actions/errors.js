import {ADD_ERROR, REMOVE_ERROR} from '../actionTypes';


export function addError(errors){
    return {
        type:ADD_ERROR,
        errors
    };
}
export function removeError(){
    return {
        type:REMOVE_ERROR,
    };
}