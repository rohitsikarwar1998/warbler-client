import React from 'react';
import { Link } from 'react-router-dom';
import BlogTimeline from './BlogTimeline';


const Homepage = (props) => {
    let {currentUser}=props;
    if (!currentUser.isAuthenticated)
        return (
            <div className="landing-page">
                <div className="home-hero">
                    <h1>Welcome to warbler</h1>
                    <h4>I think you are new</h4>
                    <Link to="/signup">
                        Sign up
                    </Link>
                </div>
                <ul class="slideshow">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        )
    else return (
        <div className="homepage-blog-container">
            <BlogTimeline profileImageUrl={currentUser.user.profileImageUrl} username={currentUser.user.username} {...props}/>
        </div>
    )
};

export default Homepage;