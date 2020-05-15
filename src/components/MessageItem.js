import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import DefaultProfileImg from '../images/default-profile-image.jpg';


const MessageItem = ({ text, data, profileImageUrl, username,removeMessage ,isCorrectUser }) => {
    return (
        <div>
            <li className="list-group-item">
                <img
                    src={profileImageUrl || DefaultProfileImg}
                    alt={username}
                    height="100"
                    width="100"
                    className='timeline-image' />
                <div className="message-area">
                    <Link to='/'>@{username} &nbsp;</Link>
                    <span className="text-muted">
                        <Moment className="text-muted" format="Do MMM YYYY">
                            {data}
                        </Moment>
                    </span>
                    <p>{text}</p>
                    {isCorrectUser && (
                        <Link to='/' onClick={removeMessage} className="btn btn-danger">Delete</Link>
                    )}
                </div>
            </li>
        </div>
    );
}

export default MessageItem;