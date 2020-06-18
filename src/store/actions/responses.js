import {GET_RESPONSES,DELETE_RESPONSE,POST_RESPONSE} from '../actionTypes';
import {apiCall} from '../../services/api';
import {addError} from './errors';


export const getresponses=(responses)=>{
    return {
        type:GET_RESPONSES,
        responses:responses.results,
        responseCount:responses.count,
    };
}
export const deleteresponse=(id)=>{
    return {
        type:DELETE_RESPONSE,
        id,
    };
}
export const postresponse=(response)=>{
    return {
        type:POST_RESPONSE,
        response,
    };
}

export const getResponses=(user_id,blog_id)=>{
    return dispatch=>{
        return apiCall('get',`http://localhost:8001/api/users/${user_id}/blogs/${blog_id}/comments`)
               .then(res=>dispatch(getresponses(res)))
               .catch(err=>dispatch(addError(err.message)));
    }
}
export const postResponse=(user_id,blog_id,text)=>{
    return dispatch=>{
        return apiCall('post',`http://localhost:8001/api/users/${user_id}/blogs/${blog_id}/comments`,{text})
               .then(res=>dispatch(postresponse(res)))
               .catch(err=>dispatch(addError(err.message)));
    }
}
export const deleteResponse=(user_id,blog_id,id)=>{
    return dispatch=>{
        return apiCall('delete',`http://localhost:8001/api/users/${user_id}/blogs/${blog_id}/comments/${id}`)
               .then(res=>dispatch(deleteresponse(res.id)))
               .catch(err=>dispatch(addError(err.message)));
    }
}

