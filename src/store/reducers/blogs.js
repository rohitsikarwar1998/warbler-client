import { LOAD_BLOGS, REMOVE_BLOG, GET_BLOG } from '../actionTypes';

const blogs = (state = [], action) => {

    switch (action.type) {
        case LOAD_BLOGS:
            return [...action.blogs];
        case REMOVE_BLOG:
            return state.filter(m => (m.id !== action.id));
        case GET_BLOG:
            return [action.blog];
        default:
            return state;
    }
};

export default blogs;