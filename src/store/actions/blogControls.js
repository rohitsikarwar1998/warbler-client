import {apiCall} from '../../services/api';

export const postLike=(user_id,blog_id)=>{
    return apiCall('post',
            `http://localhost:8001/api/users/${user_id}/blogs/${blog_id}/likes`);
}
export const deleteLike=(user_id,blog_id)=>{
    return apiCall('delete',
            `http://localhost:8001/api/users/${user_id}/blogs/${blog_id}/likes`);
}
export const postSave=(user_id,blog_id)=>{
    return apiCall('post',
            `http://localhost:8001/api/users/${user_id}/blogs/${blog_id}/saved`);
}
export const deleteSave=(user_id,blog_id)=>{
    return apiCall('delete',
            `http://localhost:8001/api/users/${user_id}/blogs/${blog_id}/saved`);
}
export const postFollow=(user_id,followee_id)=>{
    return apiCall('post',
            `http://localhost:8001/api/users/${user_id}/${followee_id}`);
}
export const deleteFollow=(user_id,followee_id)=>{
    return apiCall('delete',
            `http://localhost:8001/api/users/${user_id}/${followee_id}`);
}
