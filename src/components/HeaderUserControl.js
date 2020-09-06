import React from 'react';
import {Link} from 'react-router-dom';

const HeaderUserControl=({id,profileImageUrl,username,logout})=>{
    return (
        <li>
            <div className="user-control">
                <img src={profileImageUrl} alt="username"/>
                <span>{username}</span>
            </div>
            <div className="lower-section">
                <Link to={`/users/${id}/profile`}>Profile</Link>
                <Link to={`/users/${id}/blogs/${"saved"}`}>Saved</Link>
                <Link to={`/users/${id}/blogs/${"published"}`}>Published</Link>
                <Link to={`/users/${id}/blogs/new`}>New Story</Link>
                <Link to="/" onClick={logout}>Log out</Link>
            </div>
        </li>
    );
}

export default HeaderUserControl;