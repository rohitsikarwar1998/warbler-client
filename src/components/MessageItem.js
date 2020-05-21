import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import DefaultProfileImg from '../images/default-profile-image.jpg';


const MessageItem = ({ text, data, profileImageUrl, username, removeMessage, isCorrectUser }) => {
    debugger
    return (
        <li className="list-item">
            <div className="image-area">
                <img
                    src={profileImageUrl || DefaultProfileImg}
                    alt={username}
                    height="100"
                    width="100" />
            </div>
            <div className="message-area">
                <div>
                    <Link id="username-text" to='/'>@{username} &nbsp;</Link>
                    <span className="date-text">
                        <Moment className="date" format="Do MMM YYYY">
                            {data}
                        </Moment>
                    </span>
                </div>
                <p id="message-text">{text}</p>
                {isCorrectUser && (
                    <Link to='/' onClick={removeMessage} className="delete-btn">Delete</Link>
                )}
            </div>
        </li>
    );
}

export default MessageItem;