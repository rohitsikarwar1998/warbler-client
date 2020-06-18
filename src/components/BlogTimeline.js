import React from 'react';
import BlogList from '../containers/BlogList';


const  BlogTimeline = props=>{
    return (
        <div className="blog-list-container">
            <BlogList {...props}/>
        </div>
    );
};

export default BlogTimeline;