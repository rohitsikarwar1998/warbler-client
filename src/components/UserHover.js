import React from 'react';

const UserHover = (props) => {
    return (
        <div className="user-hover-info">
            <p>{props.username}</p>
            <img src={props.profileImageUrl} alt="user" />
        </div>
    );
}

export default UserHover;