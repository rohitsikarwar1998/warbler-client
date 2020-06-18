import {apiCall} from '../../services/api';
import {addError} from './errors';
import { REMOVE_BLOG, LOAD_BLOGS, GET_BLOG} from '../actionTypes';

export const loadBlogs=blogs =>{
    return {
        type:LOAD_BLOGS,
        blogs
    };
};

export const remove=(id)=>{
    return {
        type:REMOVE_BLOG,
        id
    };
}

export const getblog=(blog)=>{
    return {
        type:GET_BLOG,
        blog,
    };
}


export const removeBlog=(user_id,blog_id)=>{
    return dispatch=>{
        return apiCall('delete',`http://localhost:8001/api/users/${user_id}/blogs/${blog_id}`)
              .then(()=> dispatch(remove(blog_id)))
              .catch((err)=>dispatch(addError(err.message)));
    }
}


export const postNewBlog=(text)=>(dispatch,getState)=>{
    let {currentUser} =getState();
    const id=currentUser.user.id;
    return apiCall('post',`http://localhost:8001/api/users/${id}/blogs`,{text})
                   .then(res=>{})
                   .catch(err=> dispatch(addError(err.message)));
}


export const fetchBlogs=()=>{
    return dispatch=>{
        return apiCall('get','http://localhost:8001/api/blogs')
            .then(res=>dispatch(loadBlogs(res)))
            .catch(err=> addError(err.message));
    };
};

export const getBlog=(blog_id)=>(dispatch,getState)=>{
     let {currentUser} =getState();
     const id=currentUser.user.id;
     return apiCall('get',`http://localhost:8001/api/users/${id}/blogs/${blog_id}`)
            .then(res=>dispatch(getblog(res)))
            .catch(err=>addError(err.message));
}

export const getStatus=(user_id,blog_id,blog_user_id)=>{
    return Promise.all([
        apiCall('get',`http://localhost:8001/api/users/${user_id}/${blog_user_id}`),
        apiCall('get',`http://localhost:8001/api/users/${user_id}/blogs/${blog_id}/likes`),
        apiCall('get',`http://localhost:8001/api/users/${user_id}/blogs/${blog_id}/saved`)
    ]);
}
