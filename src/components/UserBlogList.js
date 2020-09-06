import React, { useEffect, useState } from 'react';
import { fetchBlogs } from '../store/actions/savedBlogs';
import BlogItem from './BlogItem';

function UserBlogList({ currentUser, info, history }) {
    //the value of info either "saved" or "published"

    const [infos ,setInfo]=useState(info);

    useEffect(()=>{
        setInfo(info);
        // console.log(info);
    });

    const [blogs, setBlog] = useState([]);

    useEffect(() => {
        async function getData(){
            const temp = await fetchBlogs(currentUser.id, info);
            // console.log(temp);
            setBlog(temp);
        }
        getData();
    },[infos]);



    return (
        <div className="homepage-blog-container">

            <div className="blog-list-container">
                <ul className="list-items">
                    {blogs.length ? blogs.map(m => (
                        <BlogItem
                            history={history}
                            key={m.id}
                            data={m.updated_at}
                            user_id={m.user_id}
                            blog_id={m.id}
                            isCorrectUser={currentUser.id === m.user_id}
                            // removeBlog={removeBlog.bind(this, m.user_id, m.id)}
                            text={m.text}
                            username={m.username}
                            profileImageUrl={m.profileImageUrl}
                            id={currentUser.id} />
                    )) :
                        <div>No blogs found</div>}
                </ul>
            </div>
        </div>
    )
}

export default UserBlogList;

