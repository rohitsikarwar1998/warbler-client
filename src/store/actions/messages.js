import {apiCall} from '../../services/api';
import {addError} from './errors';
import { REMOVE_MESSAGE, LOAD_MESSAGES} from '../actionTypes';

export const loadMessages=messages =>{
    return {
        type:LOAD_MESSAGES,
        messages
    };
};

export const remove=(id)=>{
    return {
        type:REMOVE_MESSAGE,
        id
    };
}

export const removeMessage=(user_id,message_id)=>{
    return dispatch=>{
        return apiCall('delete',`http://localhost:8001/api/users/${user_id}/messages/${message_id}`)
              .then(()=> dispatch(remove(message_id)))
              .catch((err)=>dispatch(addError(err.message)));
    }
}


export const postNewMessage=(text)=>(dispatch,getState)=>{
    let {currentUser} =getState();
    const id=currentUser.user.id;
    return apiCall('post',`http://localhost:8001/api/users/${id}/messages`,{text})
                   .then(res=>{})
                   .catch(err=> dispatch(addError(err.message)));
}


export const fetchMessages=()=>{
    return dispatch=>{
        return apiCall('get','http://localhost:8001/api/messages')
            .then(res=>dispatch(loadMessages(res)))
            .catch(err=> addError(err.message));
    };
};
