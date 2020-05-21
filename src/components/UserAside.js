import React from 'react';
import DefaultProfileImg from '../images/default-profile-image.jpg';


const UserAside = ({ profileImageUrl, username }) => {
    return (
        <aside className="user-aside-container">
            <div className="user-aside-div">
                <img
                    src={profileImageUrl || DefaultProfileImg}
                    alt={username}
                    className="img-thumbnail" />
            </div>
        </aside>
    );
}

export default UserAside;