import { apiCall } from "../../services/api";

export const fetchBlogs = (user_id, info) => {
    return apiCall('get', `http://localhost:8001/api/users/${user_id}/blogs/${info}`)
        .then(res=>{
            return res;
        })
        .catch(err=>err.message);
};