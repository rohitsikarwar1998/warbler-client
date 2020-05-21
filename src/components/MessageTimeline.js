import React from 'react';
import MessageList from '../containers/MessageList';
import UserAside from './UserAside';


const  MessageTimeline = props=>{
    return (
        <div className="inside-homepage-message-container">
            <UserAside profileImageUrl={props.profileImageUrl} username={props.username}/>
            <MessageList/>
        </div>
    );
};

export default MessageTimeline;